
function switchChannel(channelName)
 {
    console.log('Tuning into channel' + ' ' + channelName);
    //$('#channelname').html(channelName);
    document.getElementById('channelname').innerHTML=channelName;
    document.getElementById('appbarlocation').innerHTML='upgrading.never.helps';
    $('#headbar').attr('src','http://ip.lfe.mw.tum.de/sections/star-o.png');
 }
function filledstar()
{
    $('#headbar').attr('src','http://ip.lfe.mw.tum.de/sections/star.png');
}
function selectTab(postbutton,tabld)
{
    $('#newbutton').removeClass(tabld);
    $('#trendbutton').removeClass(tabld);
    $('#favbutton').removeClass(tabld);
    console.log('Changing to tab'+' '+postbutton);
    $(postbutton).addClass(tabld);
}
function showhideemoji()
{
    $('#emojis').hide();
}
