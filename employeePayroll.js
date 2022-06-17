window.addEventListener('DOMContentLoaded',(event)=>{
    creatInnerHtml();
}) 

const creatInnerHtml = () => {
    const innerHtml =`
    <tr>
    <th>profile</th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
</tr>
<tr>
    <td><img  class="profile"   src="swapnil.jpeg" alt=""> 
    </td>
    <td>SWAPNIL PAWAR</td>
    <td>MALE</td>
    <td><div class="dept-lavel">ENGINEERS</div>
    </td>
     <td>3000000</td>
     <td>1 NOV 2020</td>
     <td>
            <img id="1" onclick="remove(this)" alt="delete" src="deleteLogo.jpg" >
            <img id="1" onclick="update(this)" alt="edit" src="editLogo.jpg" >
         </td>
</tr>
`
document.querySelector('#display').innerHTML = innerHtml;

}