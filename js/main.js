let app = new Vue({
    el: "#vueApp",
    data: {
        list:[
            {id:1, item:'test', checked:false}
        ],
        label:[
            {text:'Not complete'}
        ],
        welcomeMessage: '',
        newItem: '',
        checked: false,
    },
    methods: 
    {
        AddingItem:function()
        {
            let id = this.list.lenght + 1
            if (this.newItem !== '')
            {
                const newList = {id:id,item:this.newItem, checked:false}
                this.list.push(newList)
                this.Save()
            }
        },
       removeItem(index)
       {
           this.list.splice(index,1)
           this.Save();
       },
       Completed:function()
       {
           app.list.checked = !app.checked
           app.label.text = app.checked ? 'Not complete' : 'Complete';
       },
       Save:function()
        {
        const parsed = JSON.stringify(this.list);
        localStorage.setItem('list', parsed);
        }
    },
    mounted() {
        if (localStorage.getItem('list')) {
          try {
            this.list = JSON.parse(localStorage.getItem('list'));
          } catch(e) {
            localStorage.removeItem('list');
          }
        }
      },
   
});
