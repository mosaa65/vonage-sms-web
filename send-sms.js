document.getElementById('smsForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // مفاتيحك الخاصة من Vonage
    const apiKey = "ac22bae6";
    const apiSecret = "DV)vSH%z^45gvz9zI2Sih";

    // رابط الإرسال المباشر
    const url = `https://rest.nexmo.com/sms/json?api_key=${apiKey}&api_secret=${apiSecret}&to=${phone}&from=VonageAPI&text=${encodeURIComponent(message)}`;

    // إظهار حالة جاري الإرسال
    const btn = e.target.querySelector('button');
    btn.innerText = "جاري الإرسال...";
    btn.disabled = true;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.messages[0].status === "0") {
            alert("✅ تم إرسال الرسالة بنجاح!");
            e.target.reset(); // تفريغ الحقول
        } else {
            alert("❌ فشل الإرسال: " + data.messages[0]['error-text']);
        }
    })
    .catch(error => {
        alert("خطأ في الاتصال: تأكد من تشغيل إضافة CORS في المتصفح");
        console.error(error);
    })
    .finally(() => {
        btn.innerText = "إرسال الرسالة";
        btn.disabled = false;
    });
});
