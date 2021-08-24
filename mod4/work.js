var names = new Array();
names[0]= 'Ashok';
names[1]='sanjay';
names[2]= 'janvi';
names[3]= 'Akshay';
names[4]= 'smitha';
names[5]= 'sreetha';
names[6]= 'jacob';
names[7]= 'Arun';
names[8]= 'sivan';
names[9]= 'joshua';

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}