document
  .getElementById('submit-review-form')
  .addEventListener('click', async () => {
    const body = {
      title: document.getElementById('title').value,
      grade: parseInt(document.getElementById('grade').value),
      comment: document.getElementById('comment').value,
    };

    await fetch('/series/reviews', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });
