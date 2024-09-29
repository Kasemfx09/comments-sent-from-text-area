document.getElementById('post-button').addEventListener('click', function(){
    const newComments=document.getElementById('text-area');
    const getComments = newComments.value;
    // Create <p></p> tag
    const p=document.createElement('p');
    p.innerText=getComments;
    // Assigned <P></P> tag in section
    const section=document.getElementById('section')
    section.appendChild(p);
    // Clear text area
    newComments.value='';
})