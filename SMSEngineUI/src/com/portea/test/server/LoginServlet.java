package com.portea.test.server;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/loginServlet")
public class LoginServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		HttpSession session = request.getSession(true);
		String ID = session.getId();

		String username = request.getParameter("username");
		String pass = request.getParameter("passsword");

		response.setContentType("text/plain");
		//response.getWriter().write(username + pass);
		if (username == "admin" && pass == "admin") {
			response.setContentType("text/plain");
			response.getWriter().write(ID);
		} else {
			response.setContentType("text/plain");
			response.getWriter().write("error");
		}
	}

}
