package com.portea.test.server;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/TestSmsGroupGenerator")
public class TestSmsGroupGenerator extends HttpServlet {
	private static final long serialVersionUID = 1L;
	Logger logger = Logger.getLogger(TestSmsGroupGenerator.class.getName());
       
    public TestSmsGroupGenerator() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String typeId = request.getParameter("typeId");
		if (typeId == null) {
			logger.log(Level.INFO, "No Type specified, will return all known groups");
			returnAllGroups(request, response);
		}
		else {
			returnGroupsForAType(typeId, request, response);
		}
	}
	
	private void returnAllGroups(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Implement the logic to return all known groups4
		StringBuilder builder = new StringBuilder();
		builder.append(
				"List of all known groups. Functionality to be implemented"
		);
		response.getWriter().append(builder.toString());
	}
	
	private void returnGroupsForAType(String typeId, HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		// TODO Implement the logic to return the groups for a specific sms type
		StringBuilder builder = new StringBuilder();
		
		
		if (typeId.equals("1")) {
			builder.append(
					"Groups for Type 1. Functionality to be implemented"
					);
		}
		else if (typeId.equals("2")) {
			builder.append(
					"Groups for Type 2. Functionality to be implemented"
					);
		}
		else {
			throw new RuntimeException("Sms Type ID not recognized");
		}
		
		response.getWriter().append(builder.toString());
	}
}
