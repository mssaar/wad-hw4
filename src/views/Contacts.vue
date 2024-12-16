<template>
    <div>
    <h3>Yhteystiedot - TÜ Deltan opetusrakennus</h3>
    <div class="contacts">
      <div class="contact">
        <br>
        <p><strong>Nimi:</strong> Vallo Väsilemmä</p>
        <p><strong>Sähköposti:</strong> www@ut.ee</p>
        <p><strong>Puhelin:</strong> +372 123 4567</p>
      </div>
      <div class="contact">
        <br>
        <p><strong>Nimi:</strong> Mauno Suhkrunmuunnii</p>
        <p><strong>Sähköposti:</strong> maunokas@ut.ee</p>
        <p><strong>Puhelin:</strong> +372 234 5678</p>
      </div>
      <div class="contact">
        <br>
        <p><strong>Nimi:</strong> Oola Ookosiivinen</p>
        <p><strong>Sähköposti:</strong> oooo@ut.ee</p>
        <p><strong>Puhelin:</strong> +372 345 6789</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Contacts"
}
</script>


<style>
.contacts {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}
</style>