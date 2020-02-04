let app = new Vue({
    el: "#vueApp",
    data: {
        list:[],
        welcomeMessage: '',
        newItem: ''
    },
    methods: {
        AddingItem:function()
        {
            let id = this.list.lenght + 1
            if (this.newItem !== '')
            {
                const newList = {id:id,item:this.newItem, checkbox:this.checkbox}
                this.list.push(newList)
            }
        }
    },
    mounted() {

    },
});
