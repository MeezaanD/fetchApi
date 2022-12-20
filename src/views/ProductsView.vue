<template>
    <div class="container">
        <div class="row">
            <div class="display-1">Products</div>
        </div>
        <h4>List of Products:</h4>
        <table>
            <tr>
                <th>ID</th>
                <th>Make</th>
                <th>Specs</th>
                <th>Amount</th>
                <th>Image</th>
            </tr>
                <tr v-for="item in products" :key="item">
                    <td>{{item.id}}</td>
                    <td>{{item.make}}</td>
                    <td>{{item.spec}}</td>
                    <td>{{item.amount}}</td>
                    <td><img :src="item.image" style="height: 100px;" alt=""></td>
                </tr>

        </table>
    </div>
    
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(["products"]),
    },
    methods: {
        ...mapActions(["fetchAllProducts"])
        
    },
    created() {
        this.fetchAllProducts();
    }
    
}
</script>

<style>
table {
    width: 100%;
}
</style>