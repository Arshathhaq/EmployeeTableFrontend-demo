<template>
    <main>
        <div class="input-group mb-3">
             <input type="text" class="form-control" placeholder="Find by Employee Id" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="value" >
             <router-link :to="`/find/${value}`" class="btn btn-primary" type="button" id="button-addon2"> Search</router-link>
        </div>
        

        <div class="addbutton">
            <router-link to="/add" class="btn btn-primary">Add</router-link>
        </div>

        <div class="container">

            <h1>Employee Database</h1>
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
                            <tr v-for="employee in employees" :key="employee.emId" >
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
    name:'ViewPageVue',

    data(){
        
        return {
            value:'',            
            employees:[]
            
        };
    },
                        
    methods: {
        getEmployees() {
            fetch("http://localhost:3000/get")
            .then((response) => response.json())
            .then(response =>{ console.log(response)
            this.employees = response });             
        },
        deleteEmployees(id) {
            fetch(`http://localhost:3000/delete/${id}`, {method:'DELETE'})
            .then((data) => {
                 console.log(data);
                 this.getEmployees()}
            );
        }
   
       },
    created(){
        this.getEmployees()
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
    border-left: 2px solid grey;
}
</style>