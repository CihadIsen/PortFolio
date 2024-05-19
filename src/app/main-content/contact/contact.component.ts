import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/il8n/', '.json');
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  constructor(private translateService: TranslateService) {}
  ngOnInit(): void {
    const defaultLanguage = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(defaultLanguage);
    this.translateService.use(defaultLanguage);
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
  }

  isChecked: boolean = false;

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }

  resetForm(ngForm: NgForm) {
    ngForm.resetForm();
    this.isChecked = false; // Checkbox zurücksetzen
  }

  
  http = inject(HttpClient);

  mailTest = false;

  post = {
    endPoint: 'https://cihad-isen.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
       
      },
      responseType: 'text',
    },
  };

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  isFormValid(ngForm: NgForm): boolean {
    // Ensure the form and checkbox states are always boolean
    return !!ngForm.valid && this.isChecked;

  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
     
      if (!this.contactData.name || !this.contactData.email) {
       
        ngForm.controls['name'].setErrors({ 'required': true });
        ngForm.controls['email'].setErrors({ 'required': true });
        return;
      }
  
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            alert("Nachricht erfolgreich gesendet");
            // Zurücksetzen des Formulars nach erfolgreichem Senden
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      alert("Nachricht erfolgreich gesendet");
      this.resetForm(ngForm);
      //ngForm.resetForm();
      this.isChecked = false;
    }
  }
  

  

 

}
