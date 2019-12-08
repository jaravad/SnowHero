import requests
import bs4

response = requests.get('https://snow-devil.myshopify.com/collections/jackets?page=2')

soup = bs4.BeautifulSoup(response.text, 'html.parser')

img_tags = soup.select('.grid-uniform img')
#/media/jesusdavid/Windows/Users/Jesus_David/Desktop/Web Development/SnowHero/images
i = 19
for jacket in img_tags:
	r = requests.get('https:'+jacket['src'])
	with open('C:/Users/Jesus_David/Desktop/Web Development/SnowHero/images/jackets/'+'jacket_'+str(i)+'.jpg', 'wb') as f:
		f.write(r.content)
	
	i+=1