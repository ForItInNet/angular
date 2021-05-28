import {Component, Host, OnInit} from '@angular/core';
import {Writing} from "../../../../../../data/interfaces/Writing";
import {WritingService} from "../../../../../../services/writing.service";
import {PopUpComponent} from "../../../pop-up/pop-up.component";
import {ProfileComponent} from "../../profile.component";
import {User} from "../../../../../../data/models/User";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss', '../../../../content.component.scss']
})
export class BlogComponent implements OnInit
{
    private allWritings: Writing[] = [];
    public writingsToShow: Writing[] = [];

  constructor(private writingService: WritingService,
              @Host() public parent: ProfileComponent)
  {}

  ngOnInit(): void
  {
    this.parent.getUserWritings(writings => {
      this.allWritings = writings;
      this.writingsToShow = this.allWritings.reverse();
    });
  }

  public changeWritingForView(item: HTMLButtonElement)
  {
    if(item.name === 'ALL')
      this.writingsToShow = this.allWritings.reverse();
    else if(item.name !== null && item.name.length !== 0)
      this.writingsToShow = this.allWritings.filter((writing: Writing) => {
        return writing.type == item.name;
      }).reverse();
  }

  public onSearch(value: string): void
  {
    if(value !== '')
      this.writingsToShow = this.allWritings.filter((writing: Writing) => writing.title.indexOf(value) !== -1)
    else
      this.writingsToShow = this.allWritings;
  }

  public addPost(): void
  {
    let fun = (data: any) => {
        this.writingService.addUserPost(data).subscribe(data =>{
            this.allWritings.splice(0, 0, data);
          });
    };

    PopUpComponent.openPopUp(fun, this.html, "Створити допис");
  }

  public deleteWriting(entityToken: string): void
  {
    [this.writingsToShow, this.allWritings].forEach(data => {
      data.forEach((item, index) => {
        if(item.entityToken == entityToken)
          data.splice(index, 1);
      });
    })
  }


  private html = '<input type="text" class="post-title" placeholder="Заголовок" id="title" name="title" [formControlName]="title">\n' +
  '  <ul class="pop-up__tools">\n' +
  '    <li class="tools__item">\n' +
  '      <button class="item__button">\n' +
  '        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
  '             viewBox="0 0 333 333" style="enable-background:new 0 0 333 333;" xml:space="preserve">\n' +
  '        <g>\n' +
  '          <g>\n' +
  '            <path d="M323,31.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,31.5,323,31.5z"/>\n' +
  '          </g>\n' +
  '        </g>\n' +
  '          <g>\n' +
  '          <g>\n' +
  '            <path d="M230,114.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h220c5.5,0,10-4.5,10-10S235.5,114.5,230,114.5z"/>\n' +
  '          </g>\n' +
  '        </g>\n' +
  '          <g>\n' +
  '          <g>\n' +
  '            <path d="M323,198.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,198.5,323,198.5z"/>\n' +
  '          </g>\n' +
  '        </g>\n' +
  '          <g>\n' +
  '          <g>\n' +
  '            <path d="M151,281.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h141c5.5,0,10-4.5,10-10S156.5,281.5,151,281.5z"/>\n' +
  '          </g>\n' +
  '        </g>\n' +
  '      </svg>\n' +
  '      </button>\n' +
  '    </li>\n' +
  '    <li class="tools__item">\n' +
  '      <button class="item__button">\n' +
  '        <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
  '              viewBox="0 0 333 333" style="enable-background:new 0 0 333 333;" xml:space="preserve">\n' +
  '        <g>\n' +
  '          <g>\n' +
  '            <path d="M323,31.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,31.5,323,31.5z"/>\n' +
  '          </g>\n' +
  '        </g>\n' +
  '          <g>\n' +
  '          <g>\n' +
  '            <path d="M276,114.5H56c-5.5,0-10,4.5-10,10s4.5,10,10,10h220c5.5,0,10-4.5,10-10S281.5,114.5,276,114.5z"/>\n' +
  '          </g>\n' +
  '        </g>\n' +
  '          <g>\n' +
  '          <g>\n' +
  '            <path d="M323,198.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,198.5,323,198.5z"/>\n' +
  '          </g>\n' +
  '        </g>\n' +
  '          <g>\n' +
  '          <g>\n' +
  '            <path d="M234,281.5H93c-5.5,0-10,4.5-10,10s4.5,10,10,10h141c5.5,0,10-4.5,10-10S239.5,281.5,234,281.5z"/>\n' +
  '          </g>\n' +
  '        </g>\n' +
  '      </svg>\n' +
  '\n' +
  '      </button>\n' +
  '    </li>\n' +
  '    <li class="tools__item">\n' +
  '      <button class="item__button">\n' +
  '        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
  '             viewBox="0 0 333 333" style="enable-background:new 0 0 333 333;" xml:space="preserve">\n' +
  '        <g>\n' +
  '          <g>\n' +
  '            <path d="M323,31.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,31.5,323,31.5z"/>\n' +
  '          </g>\n' +
  '        </g>\n' +
  '          <g>\n' +
  '          <g>\n' +
  '            <path d="M323,114.5H104c-5.5,0-10,4.5-10,10s4.5,10,10,10h219c5.5,0,10-4.5,10-10S328.5,114.5,323,114.5z"/>\n' +
  '          </g>\n' +
  '        </g>\n' +
  '          <g>\n' +
  '          <g>\n' +
  '            <path d="M323,198.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,198.5,323,198.5z"/>\n' +
  '          </g>\n' +
  '        </g>\n' +
  '          <g>\n' +
  '          <g>\n' +
  '            <path d="M323,281.5H182c-5.5,0-10,4.5-10,10s4.5,10,10,10h141c5.5,0,10-4.5,10-10S328.5,281.5,323,281.5z"/>\n' +
  '          </g>\n' +
  '        </g>\n' +
  '      </svg>\n' +
  '      </button>\n' +
  '    </li>\n' +
  '    <li class="tools__item">\n' +
  '      <button class="item__button">\n' +
  '        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
  '             viewBox="0 0 333 333" style="enable-background:new 0 0 333 333;" xml:space="preserve">\n' +
  '        <g>\n' +
  '          <g>\n' +
  '            <path d="M323,31.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,31.5,323,31.5z"/>\n' +
  '          </g>\n' +
  '        </g>\n' +
  '          <g>\n' +
  '          <g>\n' +
  '            <path d="M323,114.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,114.5,323,114.5z"/>\n' +
  '          </g>\n' +
  '        </g>\n' +
  '          <g>\n' +
  '          <g>\n' +
  '            <path d="M323,198.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,198.5,323,198.5z"/>\n' +
  '          </g>\n' +
  '        </g>\n' +
  '          <g>\n' +
  '          <g>\n' +
  '            <path d="M323,281.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,281.5,323,281.5z"/>\n' +
  '          </g>\n' +
  '        </g>\n' +
  '      </svg>\n' +
  '      </button>\n' +
  '    </li>\n' +
  '  </ul>\n' +
  '  <textarea class="textarea" placeholder="Пост" id="post" name="post" formControlName="post"></textarea>\n' +
  '  <div class="pop-up__button">\n' +
  '    <button class="button">Зберегти</button>\n' +
  '    <button class="button" type="submit">Опублікувати</button>\n' +
  '  </div>' +
    '<style>' +
    '.header__title{\n' +
    '    font-size: 16px;\n' +
    '    color: #8d8d8d;\n' +
    '  }\n' +
    '\n' +
    '  .header__exit{\n' +
    '    background-color: #00000000;\n' +
    '  }\n' +
    '\n' +
    '  svg{\n' +
    '    height: 10px;\n' +
    '    width: 10px;\n' +
    '  }\n' +
    '\n' +
    '  .pop-up__tools{\n' +
    '    display: flex;\n' +
    '    margin: 15px 0 10px 0;\n' +
    '  }\n' +
    '\n' +
    '  .tools__item + .tools__item{\n' +
    '    margin-left: 15px;\n' +
    '  }\n' +
    '\n' +
    '  .item__button{\n' +
    '    background-color: #00000000;\n' +
    '  }\n' +
    '\n' +
    '  svg{\n' +
    '    height: 20px;\n' +
    '    width: auto;\n' +
    '  }\n' +
    '\n' +
    '  .post-title, .textarea{\n' +
    '    width: 100%;\n' +
    '    box-shadow: inset 0 0 10px rgba(124, 124, 124, 0.3);\n' +
    '    padding: 5px 10px;\n' +
    '    border-radius: 2px;\n' +
    '  }\n' +
    '\n' +
    '  .post-title{\n' +
    '    margin-top: 10px;\n' +
    '  }\n' +
    '\n' +
    '  .textarea{\n' +
    '    min-height: 300px;\n' +
    '    resize: vertical;\n' +
    '  }\n' +
    '\n' +
    '  .pop-up__button{\n' +
    '    display: flex;\n' +
    '    justify-content: space-between;\n' +
    '    padding: 5px;\n' +
    '    margin-top: 10px;\n' +
    '  }\n' +
    '\n' +
    '  .button{\n' +
    '    background-color: #ffffff;\n' +
    '    padding: 5px 10px;\n' +
    '    box-shadow: 0px 3px 5px rgba(71, 71, 71, 0.2);\n' +
    '  }' +
    '</style>';
}
