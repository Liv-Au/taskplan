class TaskManager {
    constructor(currentId = 0, name, description, assignedTo, dueDate, status) {
        this.currentId = currentId;
        this.name = name;
        this.description = description;
        this.assignedTo = assignedTo;
        this.dueDate = dueDate;
        this.status = status;
        this.allInfo = this.getlocalstorage(); //calling local storage
        
    }
    //function to 
    getlocalstorage(){
        let a = localStorage.getItem("allInfo"); //getting "allinfo" as a  key element using get method
        if(typeof a === "undefined" || a === null || a === undefined) //checking the values if null, if there is no key
        {
            return []; //return empty array
        }
        return JSON.parse(a);//parse converting a JSON object in text format to a Javascript object 
    }
    storeValue = () => {
  
        let info = {};
        this.currentId ++,
    
        info.name = document.getElementById("name").value;
        info.description = document.getElementById("description").value;
        info.assignedTo = document.getElementById("formAssigned").value;
        info.dueDate = document.getElementById("date").value;
        info.status = document.getElementById("status").value;
  
        this.allInfo.push(info);
        localStorage.setItem("allInfo",JSON.stringify(this.allInfo)); //stringify converts a JavaScript object or value to a JSON string
        //setting values to localstorage using "allInfo" key by converting Json.
        $('#createModal').modal('hide');
        homeworkTask.listalltodo(); //after saving data
    } 
    listalltodo = () =>
            {
                let lineItem = "";
                this.allInfo.forEach(mylist);
            
                document.getElementById("myToDoList").innerHTML = lineItem;
  
                    function mylist(item, index) //getting each todo list array index key
                    {
                    lineItem += '<div class="todo-box col-sm-6 col-md-3"><h5 class="card-title">'+item.name+'</h5><p class="card-text"><br> Task Name:  <br>Description :'+ item.description+' <br>Assigned to:'+ item.assignedTo+'<br>Date: 19/06/2022<br>Status: '+ item.status+'</p></div>';
                    }
            }
  
  }
  
  const homeworkTask = new TaskManager();
  homeworkTask.listalltodo(); //intial load of data