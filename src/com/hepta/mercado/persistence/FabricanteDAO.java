package com.hepta.mercado.persistence;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import com.hepta.mercado.entity.Fabricante;

public class FabricanteDAO {


	@SuppressWarnings("unchecked")
	public List<Fabricante> getAll() throws Exception {
		EntityManager em = HibernateUtil.getEntityManager();
		List<Fabricante> fabricantes = new ArrayList<>();
		try {
			Query query = em.createQuery("FROM Fabricante");
			fabricantes = query.getResultList();
		} catch (Exception e) {
			em.getTransaction().rollback();
			throw new Exception(e);
		} finally {
			em.close();
		}
		return fabricantes;
	}
}
