int vertex_count = 3;
float[] vertices = new float[vertex_count*2];
float[] distance = new float[vertex_count];
bool collision = false;
bool out_of_screen = true;
float canvasWidth = 700;
float canvasHeight = 350;

void setup() {
  size(canvasWidth, canvasHeight);
  noStroke();
  frameRate(30);

  genCircleVertices(width/2, height/2, 40);

  PFont fontA = loadFont("courier");
  textFont(fontA, 14);  
}

void draw() {  
  background(0, 0);

  // Draw Normals with guides
  if (!out_of_screen) {
    collision = true;
    drawNormal({vertices[(vertex_count*2)-2], vertices[(vertex_count*2)-1]}, {vertices[0], vertices[1]}, 1);
    for (int i=0; i<(vertex_count*2)-1; i+=2) {
      drawNormal({vertices[i], vertices[i+1]}, {vertices[i+2], vertices[i+3]}, i);
    }
  }

  // Draw Polygon
  noStroke();
  if (!collision)
    fill(84, 209, 233);
  else
    fill(255, 100, 100);
  beginShape();
  for (int i=0; i<(vertex_count*2)-1; i+=2)
    vertex(vertices[i], vertices[i+1]);
  endShape();

  // Text
  if (!out_of_screen) {
    if (distance[0] < 0) fill(180); else fill(0);
    text("distance[0] = " + nf(distance[0], 1, 2), width-180, 20);

    if (distance[1] < 0) fill(180); else fill(0);
    text("distance[1] = " + nf(distance[1], 1, 2), width-180, 40);

    if (distance[2] < 0) fill(180); else fill(0);
    text("distance[2] = " + nf(distance[2], 1, 2), width-180, 60);
  }
}

void drawNormal(float[] A, float[] B, int index) {
  strokeWeight(1);

  float[] uv = getUnitVector(getNormal({A[0], A[1]}, {B[0], B[1]}));
  float[] mid = {A[0] + ((B[0] - A[0])/2), A[1] + ((B[1] - A[1])/2)};

  float[] diff = {mid[0] - mouseX, mid[1] - mouseY};
  float d = dot(diff, uv);

  float length = -d;
  distance[index] = length;
  if (length > 0) {
    // Draw normal guide
    stroke(230);
    float[] uv_p = {uv[1], -uv[0]}; // uv perpendicular to the calculated uv
    float g_length = 1000;
    line(mouseX - (uv_p[0]*g_length), mouseY - (uv_p[1]*g_length), mouseX + (uv_p[0]*g_length), mouseY + (uv_p[1]*g_length));

    stroke(220);
    // Draw square guide
    float s_length = 6;
    line(mid[0] + (uv[0]*(length-s_length)), mid[1] + (uv[1]*(length-s_length)), mid[0] + (uv[0]*(length-s_length)) + (uv_p[0]*s_length), mid[1] + (uv[1]*(length-s_length)) + (uv_p[1]*s_length));
    line(mid[0] + (uv[0]*(length-s_length)) + (uv_p[0]*s_length), mid[1] + (uv[1]*(length-s_length)) + (uv_p[1]*s_length), mid[0] + (uv[0]*(length-s_length)) + (uv[0]*s_length) + (uv_p[0]*s_length), mid[1] + (uv[1]*(length-s_length)) + (uv[1]*s_length) + (uv_p[1]*s_length));

    // Draw distance line
    stroke(100);
    line(mid[0], mid[1], mid[0] + (uv[0]*length), mid[1] + (uv[1]*length));
    collision = false;
  }
}

void genCircleVertices(float centre_x, float centre_y, float radius) {
  for (int i=0; i<(vertex_count*2)-1; i+=2) {
    float x = centre_x;
    float y = centre_y;

    float percent = (i / (vertex_count*2));
    float rad = percent * TWO_PI;

    // Vertex position
    x += radius * cos(rad);
    y += radius * sin(rad);

    // Add pos
    vertices[i] = x;
    vertices[i+1] = y;
  }
}

float dot(float[] vec1, float[] vec2) {
  return (vec1[0]*vec2[0]) + (vec1[1]*vec2[1]);
}

float[] getNormal(float[] A, float[] B) {
  float[] AB = {B[0] - A[0], B[1] - A[1]}; 

  // Normal vector (perpendicular to the right side of AB)
  return new float[]{AB[1], -AB[0]}
}

float[] getUnitVector(float[] normal) {
  // Calc unit vector with axis parallel to the normal vector
  float mag = sqrt(pow(normal[0], 2) + pow(normal[1], 2));

  return new float[]{normal[0]/mag, normal[1]/mag};
}

// Show/Hide details when mouse has left the canvas
void mouseOut() {
  out_of_screen = true; 
  collision = false;
  draw();
  noLoop();
}
void mouseIn() {
  out_of_screen = false;
  loop();
}

void resize(float w) {
  canvasWidth = w;
  setup();
  draw()
}
