import { Component, OnInit } from "@angular/core";
import { PhoneService } from "../services/phone.service";
import { ActivatedRoute, Router } from "@angular/router";
import { CommentService } from "../services/comment.service";

@Component({
  selector: "app-phone-detail",
  templateUrl: "./phone-detail.component.html",
  styleUrls: ["./phone-detail.component.css"]
})
export class PhoneDetailComponent implements OnInit {
  phone: any;
  comment: string;
  comments: Array<object>;

  constructor(
    route: ActivatedRoute,
    public router: Router,
    private phoneService: PhoneService,
    private commentService: CommentService
  ) {
    route.params.subscribe(params => {
      phoneService.get(params.id).subscribe(phone => {
        this.phone = phone;
        this.refreshComments();
      });
    });
  }

  ngOnInit() {}

  refreshComments(){
    this.commentService.getComments(this.phone._id).subscribe(comments => this.comments = comments)
  }

  deletePhone() {
    console.log("DELETED PHONE");
    this.phoneService.remove(this.phone._id).subscribe(() => {
      this.router.navigate(["/"]);
    });
  }

  saveComment() {
    console.log(this.comment);
    this.commentService.saveComment(this.phone._id,this.comment).subscribe(() =>{
      this.refreshComments();
    });
    this.comment = "";
  }
}
