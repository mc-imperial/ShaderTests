#version 320 es

#ifndef REDUCER
#define _GLF_ZERO(X, Y)                   (Y)
#define _GLF_ONE(X, Y)                    (Y)
#define _GLF_FALSE(X, Y)                  (Y)
#define _GLF_TRUE(X, Y)                   (Y)
#define _GLF_IDENTITY(X, Y)               (Y)
#define _GLF_DEAD(X)                      (X)
#define _GLF_FUZZED(X)                    (X)
#define _GLF_WRAPPED_LOOP(X)              X
#define _GLF_WRAPPED_IF_TRUE(X)           X
#define _GLF_WRAPPED_IF_FALSE(X)          X
#define _GLF_SWITCH(X)                    X
#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _GLF_MAKE_IN_BOUNDS_UINT(IDX, SZ) clamp(IDX, 0u, SZ - 1u)
#endif

// END OF GENERATED HEADER

precision highp float;

layout(location = 0) out vec4 _GLF_color;

struct BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

BST tree[10];

void insert()
{
 int baseIndex;
 baseIndex = 1;
 while(baseIndex <= 1)
  {
   if(1 <= tree[1].data)
    {
     vec4 _GLF_outVarBackup_GLF_color;
     if(gl_FragCoord.x < 1.0)
      {
      }
     else
      {
       _GLF_outVarBackup_GLF_color = _GLF_color;
      }
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
   else
    {
     if(tree[_GLF_MAKE_IN_BOUNDS_INT(baseIndex, 10)].rightIndex == 1)
      {
       vec4 _GLF_outVarBackup_GLF_color;
       if(gl_FragCoord.x < 1.0)
        {
        }
       else
        {
         _GLF_outVarBackup_GLF_color = _GLF_color;
        }
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
     else
      {
       baseIndex = tree[1].rightIndex;
      }
    }
  }
}
void main()
{
 _GLF_color = vec4(1.0, 1.0, 1.0, 1.7);
 vec4 _GLF_outVarBackup_GLF_color;
 _GLF_outVarBackup_GLF_color = _GLF_color;
 _GLF_color = unpackSnorm4x8(60433u);
 if(gl_FragCoord.x >= 1.0)
  {
   _GLF_color = _GLF_outVarBackup_GLF_color;
  }
 for(int _injected_loop_counter = 1; _injected_loop_counter != 0; _injected_loop_counter --)
  {
   for(int _injected_loop_counter = 0; _injected_loop_counter < 1; _injected_loop_counter ++)
    {
     insert();
    }
  }
}
