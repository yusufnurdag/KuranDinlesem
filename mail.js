class mailSender {
  sendEmail(mailName, mailEmail, mailNumber, mailMessage) {
    this.name = mailName;
    this.email = mailEmail;
    this.number = mailNumber;
    this.message = mailMessage;
    const mailUi = new UI();

    Email.send({
      SecureToken : "25fd6bbb-2eff-4628-bb02-db5a3eb1223a",
      To: "info@kurandinlesem.com",
      From: "info@kurandinlesem.com",
      Subject: "kuran",
      Body: `${"Mesaj...:"+ this.message +"  \ntelefon numarası...: "+ this.number + " \ngönderen mail: " + this.email}`
    }).then(message => mailUi.mailControl(message));
    
    
   
}


}
