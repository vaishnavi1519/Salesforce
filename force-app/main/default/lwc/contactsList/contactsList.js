<script>
import { LightningElement, api } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class ContactsList extends LightningElement {
    @api contacts;

    connectedCallback() {
        getContacts()
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                console.error(error);
            });
    }
}
</script>