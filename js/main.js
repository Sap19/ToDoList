let app = new Vue({
    el: "#vueApp",
    data: {
        list:[
            {id:1, item:'test', checked:true}
        ],
        checkedId:[],
        welcomeMessage: '',
        newItem: '',
        checked: '',
    },
    methods: {
        AddingItem:function()
        {
            let id = this.list.lenght + 1
            if (this.newItem !== '')
            {
                const newList = {id:id,item:this.newItem}
                this.list.push(newList)
            }
        },
       
       
    },
    mounted() {

    },
});
