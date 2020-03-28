class Grammar{
	constructor(r){
		this.rules=r||{}
	}
	add_rule(rn,rd){
		this.rules[rn]=rd
	}
	add_rules(rs){
		for (var rn of Object.keys(rs)){
			this.add_rule(rn,rs[rn])
		}
	}
	generate(){
		function rand(a){
			return a[Math.floor(Math.random()*a.length)]
		}
		if (Object.keys(this.rules).indexOf("START")>-1){
			var str=rand(this.rules["START"])
			while (true){
				var s=false
				for (var o of Object.keys(this.rules)){
					s=str.split(`#${o}#`).length>1?true:s
					while (true){
						if (str.includes(`#${o}#`)){
							str=str.replace(`#${o}#`,rand(this.rules[o]))
						}
						else{break}
					}
				}
				if (s==false){return str}
			}
		}
		return Object.keys(this.rules).length==0?"NO GRAMMAR RULES":"'START' grammar rule doesn't exist"
	}
}
function email_rules(g){
	g.add_rule("START",["#intr# #topic# #ending#"])
	// introduction
	g.add_rule("intr",["#greeting#, #vip_title# #names1#\n #neu_q#. I #think_s#didn't see you #s_tm##end_q_f#"])
	g.add_rule("vip_title",["Dr.","Professor","Lord","Sir","Captain","Your Majesty"])
	g.add_rule("names1",["Oliver","Jack","Harry","Jakob","Charlie","Thomas","George","Oscar","James","William"])
	g.add_rule("greeting",["Hello","Good #daytime#","Good to see you","Nice to see you"])
	g.add_rule("daytime",["morning","evening","afternoon"])
	g.add_rule("neu_q",["#neutral_q# I hope #g_mood_ans##mood_bec#","#n_weather_q# I hope #g_w_mood_ans##we_bec#"])
	g.add_rule("neutral_q",["How are You?","How are You doing?","How things are?","How's life?"])
	g.add_rule("n_weather_q",["How's the wether like?","How's the weather like at Your place?","What's the weather like at Your place?"])
	g.add_rule("we_bec",["",", because here, it was raining here 24/7 for the past couple days"," concidering that it was #w_type# here #w_u_tm_exp# for the past #w_tm_num# days"])
	g.add_rule("w_type",["raining","snowing","freezing"])
	g.add_rule("w_tm_num",["couple","#tm_num#"])
	g.add_rule("w_u_tm_exp",["24/7","all the time"])
	g.add_rule("g_mood_ans",["good","great"])
	g.add_rule("g_w_mood_ans",["good","great","excellent"])
	g.add_rule("mood_bec",["",", because I was #mood_bec_ans##mood_bec_tm#"," concidering I was #mood_bec_ans##mood_bec_tm#"])
	g.add_rule("mood_bec_ans",["ill","seek"])
	g.add_rule("mood_bec_tm",[""," since #tm_sinc# #tm_const#"," for the last #tm_num# #tm_unit#"])
	g.add_rule("s_tm",["since #tm_sinc# #tm_const#","for #tm_num# #tm_unit#","for some time"])
	g.add_rule("tm_sinc",["","last"])
	g.add_rule("tm_const",["January","Mars","October","holidays","July","Friday","Tuesday","Sunday","Thursday","weekend"])
	g.add_rule("tm_num",["","10","4","7","6","2","12","ten","four","seven","six","two","twelve"])
	g.add_rule("tm_unit",["years","days","weeks","months"])
	g.add_rule("end_q_f",[".",", right?"])
	g.add_rule("think_s",["","think I "])
	// topic
	g.add_rule("topic",["I'm #action# this #em_t# #adj_p#to ask You #seg_thk# #names2#. You know, the new #occup##end_q_f# I #think_t_s# personally #st_m_t# him. Maybe you have a diffrent opinion #q_pr# him. Let me know via #res_act#."])
	g.add_rule("action",["sending","writing"])
	g.add_rule("adj_p",["","to You "])
	g.add_rule("em_t",["email","message"])
	g.add_rule("names2",["Logan","Jake","Lucas","Michael","Alexander","Daniel","Henry","Matthew","Jackson","David"])
	g.add_rule("seg_thk",["what do You think about","what's Your opinion #q_pr#"])
	g.add_rule("occup_a",["'proffesional'","crazy","'crazy'","space","fabulous","'fabulous'"])
	g.add_rule("occup_b",["firefighter","spy","scientist","mechanic","astronaut","adventurer","cowboy","detective","policeman","solider","doctor","ninja"])
	g.add_rule("occup",["#occup_b#","#occup_a# #occup_b#"])
	g.add_rule("think_t_s",["","think I saw him #tm_num# #tm_units_m# ago. I "])
	g.add_rule("tm_units_m",["days","weeks","months"])
	g.add_rule("st_m_t",["like","do not like","don't like","hate"])
	g.add_rule("q_pr",["about","on"])
	// ending
	g.add_rule("ending",["#rp_tm#.\n#t_end#,\n#names3#"])
	g.add_rule("rp_tm",["Pleas respond as soon as possible","Pleas respond asap"])
	g.add_rule("res_act",["email","message"])
	g.add_rule("t_end",["Kind regards","All my best","Best","Best regards","Regards"])
	g.add_rule("names3",["Luke","Gabriel","Julian","Christopher","Andrew","Ryan","Nathan","Christian","Jonathan","Adrian"])
}