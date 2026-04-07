let failedEmails = [];

function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}

function sendEmail(email) {
  return new Promise((resolve, reject) => {
    let time = Math.floor(Math.random() * 5);

    setTimeout(() => {
      let probability = Math.floor(Math.random() * 10);

      if (probability <= 6) resolve(email);
      else reject(email);
    }, time * 1000);
  });
}

function startSending() {
  failedEmails = [];

  const input = document.getElementById("emailInput").value;
  const emails = input.split("\n").map(e => e.trim()).filter(e => e);

  const resultList = document.getElementById("resultList");
  const progress = document.getElementById("progress");
  const retryBtn = document.getElementById("retryBtn");

  resultList.innerHTML = "";
  retryBtn.style.display = "none";

  let completed = 0;
  let total = emails.length;

  progress.textContent = `Progress: 0/${total}`;

  emails.forEach(email => {
    const li = document.createElement("li");

    // ❌ Validation
    if (!validateEmail(email)) {
      li.textContent = `⚠️ ${email} is invalid`;
      li.style.color = "orange";
      resultList.appendChild(li);
      return;
    }

    // ⏳ Loader
    li.innerHTML = `<span class="loader"></span> Sending to ${email}...`;
    resultList.appendChild(li);

    sendEmail(email)
      .then(() => {
        li.textContent = `✅ ${email} sent`;
        li.style.color = "green";
      })
      .catch(() => {
        li.textContent = `❌ ${email} failed`;
        li.style.color = "red";
        failedEmails.push(email);
      })
      .finally(() => {
        completed++;
        progress.textContent = `Progress: ${completed}/${total}`;

        // Show retry if any failed
        if (completed === total && failedEmails.length > 0) {
          retryBtn.style.display = "inline-block";
        }
      });
  });
}

function retryFailed() {
  if (failedEmails.length === 0) return;

  const emailsToRetry = [...failedEmails];
  failedEmails = [];

  const resultList = document.getElementById("resultList");
  const progress = document.getElementById("progress");

  let completed = 0;
  let total = emailsToRetry.length;

  progress.textContent = `Retry Progress: 0/${total}`;

  emailsToRetry.forEach(email => {
    const li = document.createElement("li");

    li.innerHTML = `<span class="loader"></span> Retrying ${email}...`;
    resultList.appendChild(li);

    sendEmail(email)
      .then(() => {
        li.textContent = `✅ ${email} sent (retry)`;
        li.style.color = "green";
      })
      .catch(() => {
        li.textContent = `❌ ${email} still failed`;
        li.style.color = "red";
        failedEmails.push(email);
      })
      .finally(() => {
        completed++;
        progress.textContent = `Retry Progress: ${completed}/${total}`;
      });
  });
}
