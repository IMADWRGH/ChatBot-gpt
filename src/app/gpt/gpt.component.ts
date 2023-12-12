import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gpt',
  templateUrl: './gpt.component.html',
  styleUrls: ['./gpt.component.css']
})
export class GptComponent implements OnInit {
  queryFromGroup!: FormGroup;

  messages = [
    {
      role: "system",
      content: "You are a helpful assistant.",

    }
  ];
  payload = [{
    model: "gpt-3.5-turbo",
    messages: this.messages,

  }];

  result: any;
  constructor(private fb: FormBuilder, private http: HttpClient) { }


  ngOnInit() {
    this.queryFromGroup = this.fb.group({
      query: this.fb.control(''),
    })
  }

  HandleAskGPT() {
    let API_URL = "https://api.openai.com/v1/chat/completions";
    let httpHeader = new HttpHeaders()
      .set("Authorization", "Bearer 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")
      .set("Content-Type", "application/json");;

    this.messages.push({
      role: "user", content: this.queryFromGroup.value.query
    })
    let payload = {
      model: "gpt-3.5-turbo",
      messages: this.messages.slice()
    };

    this.http.post(API_URL, payload, { headers: httpHeader }).subscribe({
      next: (resp) => {
        this.result = resp;
        this.result.choices.forEach((choice: any) => {
          this, this.messages.push({
            role: "assistant", content: choice.message.content
          })

        });
        // console.error(resp);
      },
      error: (err) => {
        console.error("Error", err);

      }
    })

  }
}
