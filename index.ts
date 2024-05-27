import inquirer from 'inquirer';

let data: any[] = [];

async function addEmployee() {
    let data_employee = await inquirer.prompt([
        {
            name: 'emplid',
            type: 'number',
            message: 'Enter Employee Id'
        },
        {
            name: 'emplname',
            type: 'input',
            message: 'Enter Employee Name'
        },
        {
            name: 'emplsalary',
            type: 'number',
            message: 'Enter Employee salary'
        }
    ]);
    data.push(data_employee);
    console.log("Current Employees:", data);
}

async function removeEmployee() {
    if (data.length === 0) {
        console.log("No employees to remove.");
        return;
    }
    
    let data_reup = await inquirer.prompt({
        name: "re_up",
        type: "list",
        message: "Please choose the keys?",
        choices: ['delete', "update", 'add_data']
    });
    
    if (data_reup.re_up === 'delete') {
        let removedata = await inquirer.prompt({
            name: "emplid2",
            type: 'number',
            message: "Enter Employee Id to delete"
        });
        
        let index: number = data.findIndex((e: any) => e.emplid === removedata.emplid2);
        console.log("INDEX", index);
        
        if (index !== -1) {
            data.splice(index, 1);
            console.log(`Employee with ID ${removedata.emplid2} has been removed.`);
        
        }else {
            console.log(`Employee with ID ${removedata.emplid2} not found.`);
        }
    }
    
    else if(data_reup.re_up === 'update'){
        let update_Emplo = await inquirer.prompt(  
             {
                    name: "updatem",
                    type: "list",
                    message: "Do you want to update an employee?",
                    choices: ['ID', "name",'salary']
                }
                )
                if (update_Emplo.updatem === 'ID') {
                    let update_id = await inquirer.prompt(
                     [
                        {
                            name: 'findindexnum',
                            type: 'number',
                            message: 'Please select the ID you want to change ID?'
                        },
                         ])
                         let get_ID: number = data.findIndex((e: any) => e.emplid === update_id.findindexnum);
                              
                         if (get_ID !== -1) {
                            let edit_id = await inquirer.prompt(
                                [
                                   {
                                       name: 'updatemplid',
                                       type: 'number',
                                       message: 'Do you want to update id ?'
                                   },
                                    ])
                                    data[get_ID].emplid  = edit_id.updatemplid
                        }
                    }
                if (update_Emplo.updatem === 'name') {
                    let update_name = await inquirer.prompt(
                     [
                        {
                            name: 'findindexnum',
                            type: 'number',
                            message: 'Please select the ID you want to rename?'
                        },
                         ])
                         let get_name: number = data.findIndex((e: any) => e.emplid=== update_name.findindexnum);
                         
                         
                         if (get_name !== -1) {
                            let edit_name = await inquirer.prompt(
                                [
                                   {
                                       name: 'updatemplname',
                                       type: 'input',
                                       message: 'Do you want to update name ?'
                                   },
                                    ])
                                   let a = data[get_name].emplname  = edit_name.updatemplname
                        }
                    }
                    
                if (update_Emplo.updatem === 'salary') {
                    let update_salary = await inquirer.prompt(
                     [
                        {
                            name: 'findindexnum',
                            type: 'number',
                            message: 'Please select the ID whose salary you want to change?'
                        },
                         ])
                         let get_salary: number = data.findIndex((e: any) => e.emplid === update_salary.findindexnum);
                         
                         
                         if (get_salary !== -1) {
                            let edit_salary = await inquirer.prompt(
                                [
                                   {
                                       name: 'updatemplsalary',
                                       type: 'number',
                                       message: 'Do you want to update salary ?'
                                   },
                                    ])
                                   let a = data[get_salary].emplsalary  = edit_salary.updatemplsalary
                        }
                    }
                                    }
                else {
                    await main();
                }
                console.log("Remaining Employees:", data);    
}
            
async function main() {
    await addEmployee();
    await removeEmployee();
}


let confirm;
do {
    await main();
  confirm = await inquirer.prompt([
    {
      name: "confirming",
      type: "confirm",
      message: "Do you want to add data? :",
    },
  ]);
} while (confirm.confirming);
