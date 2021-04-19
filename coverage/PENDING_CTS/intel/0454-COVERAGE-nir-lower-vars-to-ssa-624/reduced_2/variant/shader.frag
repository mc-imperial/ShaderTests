#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

mat3x2 m32 = mat3x2(1.0);

void main()
{
 int _GLF_SPLIT_LOOP_COUNTERc = 1;
 _GLF_SPLIT_LOOP_COUNTERc = 3;
 int r = 1;
 r = 0;
 m32[_GLF_SPLIT_LOOP_COUNTERc][r] = 1.0;
 float sums[9] = float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
 for(int c = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); c ++)
  {
   _GLF_global_loop_count ++;
   int r = 1;
   r = 0;
   sums[3] += m32[c][r];
  }
 _GLF_color = vec4(vec3(sums[1]), 1.0);
}
