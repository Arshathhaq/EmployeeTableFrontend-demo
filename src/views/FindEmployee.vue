<template>
    <main>
        <div class="header">
            <h1>Found Employee </h1>
        </div>
        <div class="home">
            <router-link to="/" class="btn btn-primary">Home</router-link>
        </div>
    
        <div class="container">
    
            <div>
                <table>
                    
                        <thead>
                            <tr>
                            <th>Employee id</th>
                            <th>Employee Dob</th>
                            <th>Employee Email</th>
                            <th>Employee Name</th>
                            <th>Employee Phone</th>
                            <th>Actions</th>
                            </tr>

                        </thead>
                    
                    
                        <tbody>
                            <tr :key="employee.emId" >
                                <td>{{ employee.emId }}</td>
                                <td>{{  employee.emDob }}</td>
                                <td>{{  employee.emEmail }}</td>
                                <td>{{  employee.emName }}</td>
                                <td>{{  employee.emPhone }}</td>
                                <td id="action">
                                    <div class="button">
                                            <router-link :to="`/edit/${employee.emId}` " class="btn btn-primary">Edit</router-link>
                                            <button class="btn btn-danger" type="submit" @click="deleteEmployees(employee.emId)">Delete</button>
                                    </div>
                                </td>
                            </tr>
                           
                        </tbody>
                    

                </table>
            </div>
        </div>
     </main>
</template>

<script>
export default {
    name:'FindEmployeeVue',

    data(){
        
        return {
            
            employee:{}
            
        };
    },
    methods:{
        getEmployee() {
            fetch(`http://localhost:3000/find/${this.$route.params.id}` )
            .then(response => response.json())
            .then(response => {console.log(response);
            this.employee = response })
                         
        },
        deleteEmployees(id) {
            fetch(`http://localhost:3000/delete/${id}`, {method:'DELETE'})
            .then((data) => {
                 console.log(data);
                 }
            )
            .then( response => this.$router.push("/"))
            alert('Deleted successfully.')
        }
    },
    created(){
        this.getEmployee();
    }

}
    
</script>

<style scoped>
main{
    background-color:gainsboro;
    margin: 5% 15%  15%;
    padding: 45px;
    border-radius: 40px;
    box-shadow: inset 5px 5px 12px,
                    5px  5px 13px black;

}
.container{
    width: 100%;
    margin-top: 2%;
    margin-bottom: 5%;
    padding: 5px 25px 30px 25px;
    text-align: center;
    border-radius: 40px;
    box-shadow: inset 5px 5px 12px ;

}
table{
    border:2px solid black;
    width: 100%;
    margin-top:2%;
    text-align: center;
    
    
}
table thead{
    padding-right: 5px;
}
table tbody tr{
    border-top: 2px solid black;
    margin-top:5px;
    margin-bottom: 5px;
}
table tr:nth-child(even){
    background-color: whitesmoke;
}
table tbody tr:hover{
    background-color: grey;
    color: black;
    font-weight: bold;

}
#action{
    border-left: 2px solid grey;}
</style>