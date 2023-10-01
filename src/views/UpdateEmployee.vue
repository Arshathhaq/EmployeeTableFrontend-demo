<template>
    <main style="text-align:center;">
        <div class="header">
            <h1>Update Employee Details</h1>
        </div>
        <div class="left">
            <router-link to="/"  class="btn btn-primary">Back</router-link>
        </div>
        
        <div>
            <form  @submit.prevent="updateEmployee">
            
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="name" placeholder="name" name="name" v-model="employee.emName">
                    <label for="floatingInput">Employee Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="date" class="form-control" id="floatingDate" name="DOB"  required v-model="employee.emDob">
                    <label for="floatingInput">Employee DOB</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingEmail" name="mail" placeholder="mail" v-model="employee.emEmail">
                    <label for="floatingInput">Employee Mail ID</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingNumber" name="Phone" placeholder="phone" required v-model="employee.emPhone">
                    <label for="floatingInput">Employee Phone</label>
                </div>
                <div>
                    <input type="submit" name="submit" class="btn btn-primary" value="Update"/>
                </div>
                
            </form>
        </div>

    </main>
    
</template>

<script>

export default{
    name:'UpdateEmployeeVue',
    data(){
    return{
        employee:{
            'emName':'',
            'emDob':'',
            'emEmail':"",
            'emPhone':'',
        }
    }
},
methods:{    
    updateEmployee(){
        fetch(`http://localhost:3000/update/${this.$route.params.id}` , {
            method:'PUT',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(this.employee)
        })
        .then(data => {
            console.log(this.data)
            this.$router.push("/")
        })
        alert('Updated successfully.')
        
    }
},

}
</script>

<style scoped>
.left{
   display: flex;
   justify-content:left;
   padding-left:30px ;
}
main{
    background-color:gainsboro;
    margin: 1% 15%  0 15% ;
    padding: 40px;
    border-radius: 40px;
    box-shadow: inset 5px 5px 12px,
                    5px  5px 13px black;

}
form{
    
    width: 100%;
    margin-top: 1%;
    margin-bottom: 1%;
    padding: 50px;
    text-align: center;
    border-radius: 40px;
    box-shadow: inset 5px 5px 12px ;

}

</style>