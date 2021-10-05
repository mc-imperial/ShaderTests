; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 127
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %108
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %7 "S"
               OpMemberName %7 0 "data"
               OpName %11 "func(struct-S-i11;"
               OpName %10 "s"
               OpName %17 "arr"
               OpName %20 "buf0"
               OpMemberName %20 0 "_GLF_uniform_int_values"
               OpName %22 ""
               OpName %58 "a"
               OpName %66 "v"
               OpName %93 "param"
               OpName %108 "_GLF_color"
               OpDecorate %19 ArrayStride 16
               OpMemberDecorate %20 0 Offset 0
               OpDecorate %20 Block
               OpDecorate %22 DescriptorSet 0
               OpDecorate %22 Binding 0
               OpDecorate %108 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeStruct %6
          %8 = OpTypePointer Function %7
          %9 = OpTypeFunction %2 %8
         %13 = OpTypeInt 32 0
         %14 = OpConstant %13 10
         %15 = OpTypeArray %7 %14
         %16 = OpTypePointer Function %15
         %18 = OpConstant %13 4
         %19 = OpTypeArray %6 %18
         %20 = OpTypeStruct %19
         %21 = OpTypePointer Uniform %20
         %22 = OpVariable %21 Uniform
         %23 = OpConstant %6 0
         %24 = OpConstant %6 2
         %25 = OpTypePointer Uniform %6
         %57 = OpTypePointer Function %6
         %64 = OpTypeVector %6 2
         %65 = OpTypePointer Function %64
         %67 = OpConstant %6 3
         %74 = OpConstant %6 -1
         %82 = OpConstant %6 1
         %84 = OpConstant %13 1
         %89 = OpTypeBool
        %105 = OpTypeFloat 32
        %106 = OpTypeVector %105 4
        %107 = OpTypePointer Output %106
        %108 = OpVariable %107 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %17 = OpVariable %16 Function
         %58 = OpVariable %57 Function
         %66 = OpVariable %65 Function
         %93 = OpVariable %8 Function
         %26 = OpAccessChain %25 %22 %23 %24
         %27 = OpLoad %6 %26
         %28 = OpCompositeConstruct %7 %27
         %29 = OpAccessChain %25 %22 %23 %24
         %30 = OpLoad %6 %29
         %31 = OpCompositeConstruct %7 %30
         %32 = OpAccessChain %25 %22 %23 %24
         %33 = OpLoad %6 %32
         %34 = OpCompositeConstruct %7 %33
         %35 = OpAccessChain %25 %22 %23 %24
         %36 = OpLoad %6 %35
         %37 = OpCompositeConstruct %7 %36
         %38 = OpAccessChain %25 %22 %23 %24
         %39 = OpLoad %6 %38
         %40 = OpCompositeConstruct %7 %39
         %41 = OpAccessChain %25 %22 %23 %24
         %42 = OpLoad %6 %41
         %43 = OpCompositeConstruct %7 %42
         %44 = OpAccessChain %25 %22 %23 %24
         %45 = OpLoad %6 %44
         %46 = OpCompositeConstruct %7 %45
         %47 = OpAccessChain %25 %22 %23 %24
         %48 = OpLoad %6 %47
         %49 = OpCompositeConstruct %7 %48
         %50 = OpAccessChain %25 %22 %23 %24
         %51 = OpLoad %6 %50
         %52 = OpCompositeConstruct %7 %51
         %53 = OpAccessChain %25 %22 %23 %24
         %54 = OpLoad %6 %53
         %55 = OpCompositeConstruct %7 %54
         %56 = OpCompositeConstruct %15 %28 %31 %34 %37 %40 %43 %46 %49 %52 %55
               OpStore %17 %56
         %59 = OpAccessChain %25 %22 %23 %23
         %60 = OpLoad %6 %59
               OpStore %58 %60
         %61 = OpLoad %6 %58
         %62 = OpAccessChain %57 %17 %61 %23
         %63 = OpLoad %6 %62
               OpStore %58 %63
         %68 = OpAccessChain %25 %22 %23 %67
         %69 = OpLoad %6 %68
         %70 = OpCompositeConstruct %64 %69 %69
         %71 = OpLoad %6 %58
         %72 = OpCompositeConstruct %64 %71 %71
         %73 = OpBitwiseAnd %64 %70 %72
         %75 = OpCompositeConstruct %64 %74 %74
         %76 = OpSMod %64 %73 %75
               OpStore %66 %76
               OpBranch %77
         %77 = OpLabel
               OpLoopMerge %79 %80 None
               OpBranch %78
         %78 = OpLabel
         %81 = OpLoad %6 %58
         %83 = OpIAdd %6 %81 %82
               OpStore %58 %83
               OpBranch %80
         %80 = OpLabel
         %85 = OpAccessChain %57 %66 %84
         %86 = OpLoad %6 %85
         %87 = OpAccessChain %25 %22 %23 %23
         %88 = OpLoad %6 %87
         %90 = OpINotEqual %89 %86 %88
               OpBranchConditional %90 %77 %79
         %79 = OpLabel
         %91 = OpAccessChain %25 %22 %23 %24
         %92 = OpLoad %6 %91
         %94 = OpAccessChain %8 %17 %92
         %95 = OpLoad %7 %94
               OpStore %93 %95
         %96 = OpFunctionCall %2 %11 %93
         %97 = OpLoad %7 %93
         %98 = OpAccessChain %8 %17 %92
               OpStore %98 %97
         %99 = OpLoad %6 %58
        %100 = OpAccessChain %25 %22 %23 %82
        %101 = OpLoad %6 %100
        %102 = OpIEqual %89 %99 %101
               OpSelectionMerge %104 None
               OpBranchConditional %102 %103 %122
        %103 = OpLabel
        %109 = OpAccessChain %25 %22 %23 %24
        %110 = OpLoad %6 %109
        %111 = OpConvertSToF %105 %110
        %112 = OpAccessChain %25 %22 %23 %23
        %113 = OpLoad %6 %112
        %114 = OpConvertSToF %105 %113
        %115 = OpAccessChain %25 %22 %23 %23
        %116 = OpLoad %6 %115
        %117 = OpConvertSToF %105 %116
        %118 = OpAccessChain %25 %22 %23 %24
        %119 = OpLoad %6 %118
        %120 = OpConvertSToF %105 %119
        %121 = OpCompositeConstruct %106 %111 %114 %117 %120
               OpStore %108 %121
               OpBranch %104
        %122 = OpLabel
        %123 = OpAccessChain %25 %22 %23 %23
        %124 = OpLoad %6 %123
        %125 = OpConvertSToF %105 %124
        %126 = OpCompositeConstruct %106 %125 %125 %125 %125
               OpStore %108 %126
               OpBranch %104
        %104 = OpLabel
               OpReturn
               OpFunctionEnd
         %11 = OpFunction %2 None %9
         %10 = OpFunctionParameter %8
         %12 = OpLabel
               OpReturn
               OpFunctionEnd
