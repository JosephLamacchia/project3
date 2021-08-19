import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { flashcard } from 'src/app/Models/flashcard';

@Component({
  selector: 'app-editcard',
  templateUrl: './editcard.component.html',
  styleUrls: ['./editcard.component.css']
})
export class EditcardComponent implements OnInit {

  card: flashcard = new flashcard(1, "This is a question", "This is a answer");

  ngOnInit(): void {
    
  }


closeResult = '';

constructor(private modalService: NgbModal) {}




open(content: any, card: flashcard) {
  this.card = card;

	this.modalService.open(content,
{ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
	this.closeResult = `Closed with: ${result}`;
	}, (reason) => {
	this.closeResult =
		`Dismissed ${this.getDismissReason(reason)}`;
	});
}

private getDismissReason(reason: any): string {
	if (reason === ModalDismissReasons.ESC) {
	return 'by pressing ESC';
	} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
	return 'by clicking on a backdrop';
	} else {
	return `with: ${reason}`;
	}
}
}


