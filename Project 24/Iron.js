class Iron{
	constructor(x,y){
		var options={
			'restitution':0.8,
			'friction':3,
			'density':30
		}
		this.x=x;
		this.y=y;
        this.body = Bodies.rectangle(x, y, 50, 50, options);
		World.add(world, this.body);

	}
	display(){
		var stonepos=this.body.position;		
		push()
		translate(stonepos.x, stonepos.y);
		rectMode(CENTER)
		strokeWeight(4);
		stroke("grey");
		fill("white");

		pop()
	}

}