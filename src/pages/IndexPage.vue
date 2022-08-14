<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section>
        <q-form
          @submit="onValidate"
          @reset="onClear"
          class="q-gutter-md customForm"
          ref="cadastroForm"
        >
          <q-input
            filled
            v-model="form.name"
            label="Nome completo"
            color="accent"
            hint="*Obrigatório"
            lazy-rules
            :rules="[validator.campoObrigatorio, validator.nomeCurto]"
          />

          <q-input
            filled
            type="number"
            v-model="form.age"
            label="Idade"
            color="accent"
            hint="*Obrigatório"
            lazy-rules
            :rules="[validator.campoObrigatorio]"
          />

          <q-input
            filled
            v-model="form.birth"
            label="Data de nascimento"
            color="accent"
            mask="##/##/####"
            hint="*Obrigatório"
            lazy-rules
            :rules="[validator.campoObrigatorio, validator.nascimento]"
          />

          <q-input
            filled
            v-model="form.email"
            label="Email"
            color="accent"
            hint="*Obrigatório"
            lazy-rules
            :rules="[validator.campoObrigatorio, validator.email]"
          />

          <q-input
            filled
            v-model="form.telephone"
            label="Telefone"
            color="accent"
            mask="###########"
            hint="*Obrigatório"
            lazy-rules
            :rules="[validator.campoObrigatorio, validator.telephone]"
          />

          <q-input
            filled
            v-model="form.cpf"
            label="CPF"
            color="accent"
            mask="###.###.###-##"
            hint="*Obrigatório"
            lazy-rules
            :rules="[validator.campoObrigatorio, validator.cpf]"
          />

          <div>
            <q-btn label="Validar" type="submit" color="accent" />
            <q-btn
              label="Limpar"
              type="reset"
              color="accent"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Validator from 'src/utils/validators'

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      form: {
        name: '',
        birth: '',
        age: '',
        email: '',
        telephone: '',
        cpf: ''
      }
    }
  },
  methods: {
    onValidate () {
      if (this.$refs.cadastroForm.validate()) {
        alert('Validou')
      }
    },
    onClear () {
      this.$refs.cadastroForm.resetValidation()
      this.form = {
        name: '',
        birth: '',
        age: '',
        email: '',
        telephone: '',
        cpf: ''
      }
      alert('Limpando')
    }
  },
  created () {
    this.validator = new Validator()
  }
})
</script>
<style lang="scss" scoped>
.customForm {
  width: 300px;
  max-width: 350px;
}
</style>
