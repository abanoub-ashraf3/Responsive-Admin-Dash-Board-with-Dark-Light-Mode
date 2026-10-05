const closeBtn = document.getElementById('close-btn');
const menuBtn = document.getElementById('menu-btn');
const asideMenu = document.querySelector('aside')
const themeToggler = document.querySelector('.theme-toggler');
const active = document.querySelector('.active');
const sideBar = document.querySelector('.sidebar a');

menuBtn.addEventListener('click', ()=>{
    asideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', ()=>{
    asideMenu.style.display = 'none';
})

themeToggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})


orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = 
                        `
                            <td>${order.productName}</td>
                            <td>${order.productNuumber}</td>
                            <td>${order.paymentStatus}</td>
                            <td class="${order.shipping === 'Declined' ? 'danger' 
                                : order.shipping === 'Pending' ? 'warning' 
                                : 'success'}">
                            ${order.shipping}</td>
                            <td class="primary">Details</td>
                        `;

                        tr.innerHTML = trContent;
                        document.querySelector('table tbody').appendChild(tr);
})