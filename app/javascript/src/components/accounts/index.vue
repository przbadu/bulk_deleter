<template>
  <div class="row">
    <div class="col-12">
      <h1>Accounts</h1>
    </div>
    <div class="col-12"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ['ID', 'First Name', 'Last Name'],
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' },
      ],
    };
  },
};
</script>
