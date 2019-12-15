import requests
import bs4

response = requests.get('https://venture-theme-snowboards.myshopify.com/collections/jackets?page=2&sort_by=title-ascending')

soup = bs4.BeautifulSoup(response.text, 'html.parser')

width=str(input("Digite width: "))

namesp1 = ["Andie","Campus","Cinder","Covert","Dunmore","Flicker","Flint","Frontier","Gala","Greed\ Jacket","Greenlight","Haze","Varsity","Juana","LA","Lexington","Maverick","Nicky","Restricted\ Pole\ Cat","Sunset","Tami"]


namesp2 = ["Tuscany","Victoria","Winona"]

i=0
for name in namesp2:
 	img_tags = soup.select('.product-card__image.js img[alt='+name+']')
 	for img in img_tags:
		 try:
			 r = requests.get('https:'+str(img['data-src']).replace("{width}",width))
			 with open('C:/Users/Jesus_David/Desktop/Web Development/SnowHero/images/jackets_big/'+name.replace("\ ","")+str(i)+'.jpg', 'wb') as f:
				 f.write(r.content)
			 i+=1
			 print(i)
		 except KeyError as identifier:
			 pass




	



# i = 19
# for jacket in img_tags:
# 	r = requests.get('https:'+jacket['src'])
# 	with open('C:/Users/Jesus_David/Desktop/Web Development/SnowHero/images/jackets/'+'jacket_'+str(i)+'.jpg', 'wb') as f:
# 		f.write(r.content)
	
# 	i+=1