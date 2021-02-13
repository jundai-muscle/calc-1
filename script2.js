'use strict';
/*$(function(){
    var btn=$('button');
    btn.click(function(){
        btn.removeClass('active');
        $('this').addClass('active');
    });
});*/

var inputLabel=document.getElementById('inputLabel');
var sum=0;
var ope='';
var ope2='';
var num='a';
var n=''
var word='';
var equ_count=0;
var pushed='';
var count=0;
var push='';
var ope_count=0;
var operater=['+','-','*','/'];
var stock=0;
var pi=0;

function pushBtn(obj){
    var pushed=obj.innerHTML;
    var len=inputLabel.innerHTML.length;
    var count_pi=0;
    word+=pushed;
    var word_len=word.length;

    if (pushed==="="){
        equ_count+=1;
        if(equ_count===1){
            stock=inputLabel.innerHTML;
        }
        if (ope==='+'){
            if (equ_count===1){
                inputLabel.innerHTML=Number(push)+Number(inputLabel.innerHTML);
            }
            else{
                push=stock;
                inputLabel.innerHTML=Number(inputLabel.innerHTML)+Number(push);
            }
        }
        else if (ope==='-'){
            if (equ_count===1){
                inputLabel.innerHTML=Number(push)-Number(inputLabel.innerHTML);
            }
            else{
                push=stock;
                inputLabel.innerHTML=Number(inputLabel.innerHTML)-Number(push);
            }
        }
        else if (ope==='*'){
            if (equ_count===1){
                inputLabel.innerHTML=Number(push)*Number(inputLabel.innerHTML);
            }
            else{
                push=stock;
                inputLabel.innerHTML=Number(inputLabel.innerHTML)*Number(push);
            }
        }
        else if (ope==='/'){
            if (equ_count===1){
                inputLabel.innerHTML=Number(push)/Number(inputLabel.innerHTML);
            }
            else{
                push=stock;
                inputLabel.innerHTML=Number(inputLabel.innerHTML)/Number(push);
            }
        } 
        
        word='';
        count=0;   
    }

    else if (operater.includes(pushed)){
        equ_count=0;
        count+=1;
        if(count===1){
            ope=pushed;
        }
        else{
            if (operater.includes(word[word_len-1] && operater.includes(word[word_len-2]))){
                ;
            }
            else{
                if (ope==='+'){
                    inputLabel.innerHTML=Number(push)+Number(inputLabel.innerHTML);
                }
                else if (ope==='-'){
                    inputLabel.innerHTML=Number(push)-Number(inputLabel.innerHTML);
                }
                else if (ope==='*'){
                    inputLabel.innerHTML=Number(push)*Number(inputLabel.innerHTML);
                }
                else if (ope==='/'){
                    inputLabel.innerHTML=Number(push)/Number(inputLabel.innerHTML);
                }
            }
        }
        ope=pushed;
        //push='';
    }

    else if (pushed == 'AC') {
        inputLabel.innerHTML = '0';
        sum = 0;
        ope = '';
        ope2='';
        push = '';
        word = '';
        equ_count=0;
        count = 0;
    }

    else if (pushed==='cos'){
        if(inputLabel.innerHTML===String(Math.PI)){
            inputLabel.innerHTML=Math.cos(Math.PI);
        }
        else{
            inputLabel.innerHTML=Math.cos((Number(inputLabel.innerHTML))*(Math.PI/180));
            push=inputLabel.innerHTML;
        }
    }

    else if (pushed === 'sin') {
        if (inputLabel.innerHTML === String(Math.PI)) {
            inputLabel.innerHTML = Math.sin(180 * (Math.PI / 180));
            push = inputLabel.innerHTML;
        }
        else {
            inputLabel.innerHTML = Math.sin((Number(inputLabel.innerHTML)) * (Math.PI / 180))
            push = inputLabel.innerHTML;
        }
    }

    else if (pushed === 'tan') {
        if (inputLabel.innerHTML === String(Math.PI)) {
            inputLabel.innerHTML = Math.tan(180 * (Math.PI / 180));
            push = inputLabel.innerHTML;
        }
        else {
            inputLabel.innerHTML = Math.tan((Number(inputLabel.innerHTML)) * (Math.PI / 180))
            push = inputLabel.innerHTML;
        }
    }
    else if (pushed === 'log') {
        inputLabel.innerHTML = Math.log10(Number(inputLabel.innerHTML))
        push = inputLabel.innerHTML;
    }

    else if (pushed === '1/x'){
        inputLabel.innerHTML=1/Number(inputLabel.innerHTML);
        push=inputLabel.innerHTML;
    }

    else if(pushed==='√'){
        inputLabel.innerHTML=Math.sqrt(inputLabel.innerHTML);
        push=inputLabel.innerHTML;
    }

    else if(pushed==='!'){
        n=Number(inputLabel.innerHTML);
        var result=1;
        for(let i=n;i>0;i--){
            result =result* i;
        }
        inputLabel.innerHTML=result;
        push=inputLabel.innerHTML;
        sum=Number(push);
    }

    else if(pushed==='%'){
        if(ope=== '*' || ope==='/'){
            inputLabel.innerHTML=Number(inputLabel.innerHTML)/100;
            //push=inputLabel.innerHTML;
        }
        if(ope === '+' || ope === '-') {
            console.log(push);
            inputLabel.innerHTML = Number(push)*(Number(inputLabel.innerHTML) / 100);
            //push = inputLabel.innerHTML;
        }
    }

    else if (pushed == '.') {
        if (push.indexOf('.') !== -1) {
            ;
        }
        else {
            inputLabel.innerHTML += pushed;
            push = inputLabel.innerHTML;
        }

    }

    else if(pushed==='π'){
        pi = Math.PI;
        //pi = String(pi);
        //push=
        if (inputLabel.innerHTML === '0') {
            inputLabel.innerHTML = pi;
        }
        else if (inputLabel.innerHTML === pi) {
            inputLabel.innerHTML = pi;
        }
        else{
            inputLabel.innerHTML=pi;
        }
    }


    else{
        if (inputLabel.innerHTML==='0' ){
            if (pushed !=="0"){
                inputLabel.innerHTML=pushed;
                push=pushed;
            }
        }
        else{
            if (operater.includes(word[word_len-2])){
                push=inputLabel.innerHTML;
                //console.log(push);
                inputLabel.innerHTML=pushed;
            }
            else{
                inputLabel.innerHTML+=pushed;
                //push=inputLabel.innerHTML;
            }
        }

    }
}