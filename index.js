const buttonInit = document.querySelector('.button-init');
const frontPage = document.querySelector('.front-panel')

const mainPage = document.querySelector('.main-panel');

const motbutton = document.querySelector('#Motivation');
const sadbutton = document.querySelector('#Sadness');
const angerbutton = document.querySelector('#Anger');
const happybutton =document.querySelector('#Happy');
const fearbutton = document.querySelector('#Fear')

const vid_cont = document.querySelector('.vid_cont');
const main_cont_disp = document.querySelector('.bottom-output-cont');
const img_cont = document.querySelector('.img_cont');
const text_content = document.querySelector('.text_cont')
const hap_content = document.querySelector('.hap_cont')



// Front Page 

function getRandomData(type){
    rnIndex= rn(data[type].length)
    return rnIndex;
}


function rn(len){
    return Math.floor(Math.random()*len)
}

function clearAll(){
    img_cont.innerHTML='';
    vid_cont.innerHTML='';
    text_content.innerHTML='';
    hap_content.innerHTML='';
}
 
buttonInit.addEventListener('click',()=>{
    frontPage.style.display = 'none';
    mainPage.style.display = 'grid';
    document.querySelector('body').style.background='#ffffff';
    document.querySelector('body').style.transition = '1.5s ease';
})


// ====================Motivation Button================================

const MotUsedIndex= new Set();
const sadUsedIndex = new Set();
const angerUsedIndex = new Set();
const happyUsedIndex = new Set();
let result;

function usedindex(type){
    if(type=='mot'){
        if(MotUsedIndex.size>=motivation.length){
            MotUsedIndex.clear();
        }
        while(true){
            motindex = getRandomData('motivation');
            if(MotUsedIndex.has(motindex)) continue

            MotUsedIndex.add(motindex);
            return motivation[motindex];
        }
    }
    else if(type=='sad'){
        if(sadUsedIndex.size>=sad.length){
            sadUsedIndex.clear();
        }
        while(true){
            sadindex = getRandomData('sad');
            if(sadUsedIndex.has(sadindex)) continue

            sadUsedIndex.add(sadindex);
            return sad[sadindex];
        }
    }
    else if(type=='anger'){
        if(angerUsedIndex.size>=anger.length){
            angerUsedIndex.clear();
        }
        while(true){
            angerIndex = getRandomData('anger');
            if(angerUsedIndex.has(angerIndex)) continue

            angerUsedIndex.add(angerIndex);
            return anger[angerIndex]
        }
    }
    else if(type=='happy'){
        if(happyUsedIndex.size>=hap.length){
            happyUsedIndex.clear();
        }
        while(true){
            happyIndex = getRandomData('hap');
            if(happyUsedIndex.has(happyIndex)) continue

            happyUsedIndex.add(happyIndex);
            return [hap[happyIndex]]
        }
    }
}


function motimg(){
    let img = document.createElement('img');
    result=usedindex('mot')
    img.setAttribute('src',result);
    img.setAttribute('class','img-main-cont');  

    clearAll();
    img_cont.appendChild(img);
    
}

motbutton.addEventListener('click',()=>{
    motimg();
})


// =================================SAD BUTTON======================================


sadbutton.addEventListener('click',()=>{
    let vid = document.createElement('video');
    result=usedindex('sad')

    let src = document.createElement('source');
    src.setAttribute('src',result);
    src.setAttribute('type','video/mp4');
    vid.setAttribute('class','video-play');
    vid.autoplay='true';
    vid.controls='true';
    vid.appendChild(src);

    clearAll();
    vid_cont.appendChild(vid);
})


// =================================ANGER BUTTON======================================
let key,value;

angerbutton.addEventListener('click',()=>{
    let head  = document.createElement('h1');
    let para = document.createElement('h3');

    result = usedindex('anger')
    key=Object.keys(result);
    head.innerHTML = key;
    para.innerHTML = result[key];
    
    clearAll();
    text_content.appendChild(head);
    text_content.appendChild(para)
       
})

// ===============================HAPPY BUTTON==============================================

happybutton.addEventListener('click',()=>{
    const hap_img = document.createElement('img');
    let hap_words = document.createElement('h3');
    hap_img.setAttribute('class','img-main-con'); 
    const [result] = usedindex('happy');
    
    hap_img.setAttribute('src',result);

    clearAll();
    hap_content.appendChild(hap_img);

})


// =================================FEAR BUTTON =============================================

fearbutton.addEventListener('click',()=>{
        let vid = document.createElement('video');
        let src = document.createElement('source');

        src.setAttribute('src',"videos/fear.mp4")
        src.setAttribute('type','video/mp4');
        vid.setAttribute('class','video-play');

        vid.autoplay='true';
        vid.controls='true';
        vid.appendChild(src);

        clearAll()
        vid_cont.appendChild(vid)
    }

)



motivation=[
    'images/Mot_img/1.jpg',
    "images/Mot_img/2.jpg",
    "images/Mot_img/3.png",
    "images/Mot_img/4.png",
    'images/Mot_img/5.png',
    "images/Mot_img/6.png",
    "images/Mot_img/7.jpg",
    "images/Mot_img/8.jpg",
    "images/Mot_img/9.jpg",
    "images/Mot_img/10.jpg"
]

sad=[
    "videos/Sad_vid/1.mp4",
    "videos/Sad_vid/2.mp4",
    "videos/Sad_vid/3.mp4",
    "videos/Sad_vid/4.mp4",
    "videos/Sad_vid/5.mp4",
    "videos/Sad_vid/6.mp4",
    "videos/Sad_vid/7.mp4",
    "videos/Sad_vid/8.mp4",
    "videos/Sad_vid/9.mp4",
    "videos/Sad_vid/10.mp4",
]

anger=[
    {'Count down':'Count down (or up) to 10. If you’re really mad, start at 100. In the time it takes you to count, your heart rate will slow, and your anger will likely subside.'},
    {'Take a breather':'Your breathing becomes shallower and speeds up as you grow angry. Reverse that trend (and your anger) by taking slow, deep breaths from your nose and exhaling out of your mouth for several moments.'},
    {'Go walk around':'Exercise Trusted Source can help calm your nerves and reduce anger. Go for a walk, ride your bike, or hit a few golf balls. Anything that gets your limbs pumping is good for your mind and body.'},
    {'Relax your muscles':'Progressive muscle relaxation calls on you to tense and slowly relax various muscle groups in your body, one at a time. As you tense and release, take slow, deliberate breaths.'},
    {'Repeat a mantra':'Find a word or phrase that helps you calm down and refocus. Repeat that word again and again to yourself when you’re upset. “Relax,” “Take it easy, and “You’ll be OK” are all good examples.'},
    {'Stretch':'Neck rolls and shoulder rolls are good examples of nonstrenuous yoga-like movements that can help you control your body and harness your emotions. No fancy equipment required.'},
    {'Mentally escape':'Slip into a quiet room, close your eyes, and practice visualizing yourself in a relaxing scene. Focus on details in the imaginary scene: What color is the water? How tall are the mountains? What do the chirping birds sound like? This practice can help you find calm amidst anger.'},
    {'Play some tunes':'Let music carry you away from your feelings. Put in earbuds or slip out to your car. Crank up your favorite music and hum, bop, or sashay your anger away.'},
    {' Stop talking':'When you’re steamed, you may be tempted to let the angry words fly, but you’re more likely to do harm than good. Pretend your lips are glued shut, just like you did as a kid. This moment without speaking will give you time to collect your thoughts.'},
    {'Take a timeout':'Give yourself a break. Sit away from others. In this quiet time, you can process events and return your emotions to neutral. You may even find this time away from others is so helpful you want to schedule it into your daily routine.'},
    {'Take action':'Harness your angry energy. Sign a petition. Write a note to an official. Do something good for someone else. Pour your energy and emotions into something that’s healthy and productive.'},
    {'Write in your journal':'What you can’t say, perhaps you can write. Jot down what you’re feeling and how you want to respond. Processing it through the written word can help you calm down and reassess the events leading up to your feelings.'},
    {'Find the most immediate solution':'You might be angry that your child has once again left their room a mess before going to visit a friend. Shut the door. You can temporarily end your anger by putting it out of your view. Look for similar resolutions in any situations.'},
    {'Rehearse your response':'Prevent an outburst by rehearsing what you’re going to say or how you’re going to approach the problem in the future. This rehearsal period gives you time to role-play several possible solutions, too.'},
    {'Picture a stop sign':'The universal symbol to stop can help you calm down when you’re angry. It’s a quick way to help you visualize the need to halt yourself, your actions, and walk away from the moment.'},
    {'Change your routine':'If your slow commute to work makes you angry before you’ve even had coffee, find a new route. Consider options that may take longer but leave you less upset in the end.'},
    {'Talk to a friend':'Don’t stew in the events that made you angry. Help yourself process what happened by talking with a trusted, supportive friend who can possibly provide a new perspective.'},
    {'Laugh':'Nothing upends a bad mood like a good one. Diffuse your anger by looking for ways to laugh, whether that’s playing with your kids, watching stand-up, or scrolling memes.'},
    {'Practice gratitude':'Take a moment to focus on what’s right when everything feels wrong. Realizing how many good things you have in your life can help you neutralize anger and turn around the situation.'},
    {'Set a timer':'The first thing that comes to mind when you’re angry likely isn’t the thing you should say. Give yourself a set time before you respond. This time will help you be calmer and more concise.'},
]


hap=[
    "images/Hap_img/1.webp",
    "images/Hap_img/2.jpg",
    "images/Hap_img/3.jpg",
    "images/Hap_img/4.jpg",
]



const data ={
    motivation,
    sad,
    anger,
    hap,
}