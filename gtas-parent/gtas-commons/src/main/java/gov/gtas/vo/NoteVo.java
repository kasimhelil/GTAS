package gov.gtas.vo;

import gov.gtas.enumtype.NoteType;
import gov.gtas.model.PassengerNote;

public class NoteVo  {
	private Long id;
	private String plainTextNote;
	private String rtfNote;
	private NoteType noteType;

	public static NoteVo from(PassengerNote pNote) {
		NoteVo noteVo = new NoteVo();
		noteVo.setId(pNote.getId());
		noteVo.setNoteType(pNote.getNoteType());
		noteVo.setPlainTextNote(pNote.getPlainTextNote());
		noteVo.setRtfNote(pNote.getRtfNote());
		return noteVo;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getPlainTextNote() {
		return plainTextNote;
	}
	public void setPlainTextNote(String plainTextNote) {
		this.plainTextNote = plainTextNote;
	}
	public String getRtfNote() {
		return rtfNote;
	}
	public void setRtfNote(String rtfNote) {
		this.rtfNote = rtfNote;
	}
	public NoteType getNoteType() {
		return noteType;
	}
	public void setNoteType(NoteType noteType) {
		this.noteType = noteType;
	}
	
}