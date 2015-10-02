package com.portea.test.server;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class GatewayJSON
 */
@WebServlet("/GatewayJSON")
public class GatewayJSON extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public GatewayJSON() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		

		StringBuilder builder = new StringBuilder();

		builder.append(" [{" + "\"id\": 1," + "\"name\": \"Appointment Scheduled\","
				+ "\"desc\": \"sms group description goes here..\"," + "\"cpContentMatchType\": \"ABSOLUTE_PERIOD\","
				+ "\"cpContentMatchValue\": 1313," + "\"cpTypeMatchType\": \"CALENDAR_DAY\","
				+ "\"cpTypeMatchValue\": 2," + "\"gwPriorities\": [{" + "\"id\": 1," + "\"name\": \"MGAGE\","
				+ "\"priority\": 1 }," + "{\"id\": 2," + "\"name\": \"SECGW\"," + "\"priority\": 4}]}," + "{\"id\": 2,"
				+ "\"name\": \"Payment Recieved\"," + "\"desc\": \"sms group description goes here..\","
				+ "\"cpContentMatchType\": \"ABSOLUTE_PERIOD\"," + "\"cpContentMatchValue\": 2121,"
				+ "\"cpTypeMatchType\": \"CALENDAR_DAY\"," + "\"cpTypeMatchValue\": 2," + "\"gwPriorities\": [{"
				+ "\"id\": 1," + "\"name\": \"MGAGE\"," + "\"priority\": 2}," + "{\"id\": 1," + "\"name\": \"THGW\","
				+ "\"priority\": 3}]" + "}]");
		response.getWriter().append(builder.toString());
	}

}
