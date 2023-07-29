# Google Contacts with WhatsApp links
-- [Get the latest version at github](https://github.com/yoonkit/GoogleContactsWhatsApp) --

## Creates WhatsApp links within Google Contact Phone numbers using Tampermonkey
* Adds in a WhatsApp icon for each telephone number in Google Contacts

## Current Features
* Displays the icon in the giant listing page, if the "Phone Number" column is enabled.
  * ![Contact List](https://raw.githubusercontent.com/yoonkit/GoogleContactsWhatsApp/main/images/ContactsList.png)
* In the Person's "Contact Details" is shown, all phone types will be linked to a WhatsApp icon.
  * ![Contact Details](https://raw.githubusercontent.com/yoonkit/GoogleContactsWhatsApp/main/images/PersonContactDetails.png)

## How to Install
* Install the Tampermonkey extension for your browser -> [HERE](https://www.tampermonkey.net/)
	* Mac and iPad: Safari using [Userscripts](https://apps.apple.com/us/app/userscripts/id1463298887) 
	* Microsoft: Edge needs its own [Tampermonkey](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd) installation.
* Go to GreasyFork and "Install" this script -> [HERE](https://greasyfork.org/en/scripts/471933-whatsapp-link-in-google-contact-phone-numbers)
* Check the installation is correct at Google Contacts -> [HERE](https://contacts.google.com/)
* Works on: 
	* Windows, Mac, iPad and Linux - Chrome, Brave, Firefox, Edge and Safari. 

## Note
* Please make sure that when you enter in the Phone Numbers, the country codes are correct.
* Hopefully Google doesnt update the Class Names of the fields anytime soon.
* Assumed that all numbers can be WhatsApp'ed.
* Currently doesnt check if the number is registered to WhatsApp.
