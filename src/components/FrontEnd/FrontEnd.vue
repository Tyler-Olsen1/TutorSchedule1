<template>
    <div>
        <h1>New Student</h1>
        <h3>Sign-up Sheet</h3>
        <div class="row">
            <form @submit.prevent="saveStudent" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="name" required>
                        <label>Name:</label>
                    </div>
                </div>
                Desired language:
                <label class="radio" display="flex">
                    <input type="radio" id="language" v-model="radioButtonValue" v-bind:value="selectedValue" :key="french" class="with-gap">
                        <span>French</span>
                    <input type="radio" id="language" v-model="radioButtonValue" v-bind:value="selectedValue" class="with-gap">
                        <span>German</span>
                    <input type="radio" id="language" v-bind:value="selectedValue" v-model="radioButtonValue" class="with-gap">
                        <span>Arabic</span>
                </label>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="age" required>
                        <label>Age:</label>
                    </div>
                </div>
            <div class="studentInfo">
                <div class="input-field">
                    <textarea name="studentInfo" id="studentInfo" cols="30" rows="10" v-model="studentInfo"></textarea>
                </div>
            </div>                    
            <button type="submit" class="btn">Submit</button>
                <router-link to="./FrontEndIndex" class="btn grey">Back</router-link>
            </form>
        </div>
    </div>
</template>
<script>
import db from '../firebaseInit.js'
export default {
    name: 'FrontEnd',
    data() {
        return {
            name: null,
            age: null,
            language: null,
            studentInfo: null,
        }
    },
    methods: {
        changeValue: function(thisSelectedLanguage) {
            this.selectedValue = thisSelectedLanguage;
        },
        saveStudent() {
            db.collection('students').add({
                name: this.name,
                language: thisSelectedLanguage,
                age: this.age,
                studentInfo: this.studentInfo
            })
            .then(docRef => this.$router.push('/***'))
            .catch(error => console.log(err))
        }
    }
}
</script>
<style>
.radio {
    display: flex;
    flex-direction: row; 
    justify-content: space-around;
}

h1 {
    text-align: center;
}
h3{
    text-align: center;
}

</style>
