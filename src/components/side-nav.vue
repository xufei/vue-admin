<template>
<nav>
    <header>
        <span></span>
        Xu Fei
        <a></a>
    </header>

    <ul>
        <li><span>Navigation</span></li>
        <li><a class="active" v-link="'dashboard'">Dashboard</a></li>
        <li><a v-link="'employee-list'">Statistics</a></li>
        <li><a>Roadmap</a></li>
        <li><a>Milestones</a></li>
        <li><a>Tickets</a></li>
        <li><a>GitHub</a></li>
        <li><a>FAQ</a></li>
        <li><span>Other</span></li>
        <li><a>Search</a></li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
    </ul>]
</nav>
</template>

<style>
nav {
    width: 250px;
    background: #3b4854;
}

nav header {
    position: relative;
    height: 80px;
    padding: 20px 0 0 15px;
    font-size: 16px;
    color: #fff;
    border-bottom: 1px solid #465563;
    background: #303b45;
}

nav header span {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 36px;
    margin: 0 10px 0 0;
    vertical-align: middle;
    border: 1px solid #fff;
}

nav header span:before {
    content: '\f007';
    font: normal 20px FontAwesome;
    top: 7px;
    left: 9px;
}

nav header a:before {
    content: '\f08b';
    font: normal 20px FontAwesome;
    top: 28px;
    right: 15px;
}

nav ul span {
    display: block;
    padding: 15px;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    border-bottom: 1px solid #465563;
}

nav ul a {
    position: relative;
    display: block;
    padding: 15px 15px 17px 50px;
    color: #fff;
    border-bottom: 1px solid #465563;
}

nav ul a:hover,
nav ul a.active {
    background: #465563;
}

nav ul a:before {
    font: normal 20px FontAwesome;
    top: 14px;
    left: 16px;
}

nav ul li:nth-child(2) a:before {
    content: '\f00a';
}

nav ul li:nth-child(3) a:before {
    content: '\f012';
}

nav ul li:nth-child(4) a:before {
    content: '\f018';
}

nav ul li:nth-child(5) a:before {
    content: '\f024';
}

nav ul li:nth-child(6) a:before {
    content: '\f0c3';
}

nav ul li:nth-child(7) a:before {
    content: '\f09b';
}

nav ul li:nth-child(8) a:before {
    content: '\f0fa';
}

nav ul li:nth-child(10) a:before {
    content: '\f002';
}

nav ul li:nth-child(11) a:before {
    content: '\f085';
}

nav ul li:nth-child(12) a:before {
    content: '\f08b';
}
</style>