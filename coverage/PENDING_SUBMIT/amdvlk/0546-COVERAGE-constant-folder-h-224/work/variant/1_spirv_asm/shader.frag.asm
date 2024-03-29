; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 141
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %99
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %40 "ref"
               OpName %64 "a"
               OpName %65 "i"
               OpName %99 "_GLF_color"
               OpName %113 "i"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %99 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 10
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 3
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %6 0
         %18 = OpTypePointer Uniform %6
         %43 = OpConstant %6 1
         %63 = OpTypePointer Function %6
         %72 = OpConstant %6 10
         %73 = OpTypeBool
         %76 = OpConstant %6 6
         %96 = OpTypeFloat 32
         %97 = OpTypeVector %96 4
         %98 = OpTypePointer Output %97
         %99 = OpVariable %98 Output
        %122 = OpConstant %6 2
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %40 = OpVariable %10 Function
         %64 = OpVariable %63 Function
         %65 = OpVariable %63 Function
        %113 = OpVariable %63 Function
         %19 = OpAccessChain %18 %16 %17 %17
         %20 = OpLoad %6 %19
         %21 = OpAccessChain %18 %16 %17 %17
         %22 = OpLoad %6 %21
         %23 = OpAccessChain %18 %16 %17 %17
         %24 = OpLoad %6 %23
         %25 = OpAccessChain %18 %16 %17 %17
         %26 = OpLoad %6 %25
         %27 = OpAccessChain %18 %16 %17 %17
         %28 = OpLoad %6 %27
         %29 = OpAccessChain %18 %16 %17 %17
         %30 = OpLoad %6 %29
         %31 = OpAccessChain %18 %16 %17 %17
         %32 = OpLoad %6 %31
         %33 = OpAccessChain %18 %16 %17 %17
         %34 = OpLoad %6 %33
         %35 = OpAccessChain %18 %16 %17 %17
         %36 = OpLoad %6 %35
         %37 = OpAccessChain %18 %16 %17 %17
         %38 = OpLoad %6 %37
         %39 = OpCompositeConstruct %9 %20 %22 %24 %26 %28 %30 %32 %34 %36 %38
               OpStore %11 %39
         %41 = OpAccessChain %18 %16 %17 %17
         %42 = OpLoad %6 %41
         %44 = OpAccessChain %18 %16 %17 %43
         %45 = OpLoad %6 %44
         %46 = OpAccessChain %18 %16 %17 %43
         %47 = OpLoad %6 %46
         %48 = OpAccessChain %18 %16 %17 %43
         %49 = OpLoad %6 %48
         %50 = OpAccessChain %18 %16 %17 %43
         %51 = OpLoad %6 %50
         %52 = OpAccessChain %18 %16 %17 %43
         %53 = OpLoad %6 %52
         %54 = OpAccessChain %18 %16 %17 %43
         %55 = OpLoad %6 %54
         %56 = OpAccessChain %18 %16 %17 %17
         %57 = OpLoad %6 %56
         %58 = OpAccessChain %18 %16 %17 %17
         %59 = OpLoad %6 %58
         %60 = OpAccessChain %18 %16 %17 %17
         %61 = OpLoad %6 %60
         %62 = OpCompositeConstruct %9 %42 %45 %47 %49 %51 %53 %55 %57 %59 %61
               OpStore %40 %62
               OpStore %64 %43
               OpStore %65 %43
               OpBranch %66
         %66 = OpLabel
               OpLoopMerge %68 %69 None
               OpBranch %70
         %70 = OpLabel
         %71 = OpLoad %6 %65
         %74 = OpSLessThan %73 %71 %72
               OpBranchConditional %74 %67 %68
         %67 = OpLabel
         %75 = OpLoad %6 %64
         %77 = OpSGreaterThan %73 %75 %76
               OpSelectionMerge %79 None
               OpBranchConditional %77 %78 %79
         %78 = OpLabel
               OpBranch %68
         %79 = OpLabel
         %81 = OpLoad %6 %64
         %82 = OpIAdd %6 %81 %43
               OpStore %64 %82
         %83 = OpLoad %6 %65
         %84 = OpAccessChain %63 %11 %83
               OpStore %84 %17
               OpBranch %69
         %69 = OpLabel
         %85 = OpLoad %6 %65
         %86 = OpIAdd %6 %85 %43
               OpStore %65 %86
               OpBranch %66
         %68 = OpLabel
               OpBranch %87
         %87 = OpLabel
               OpLoopMerge %89 %90 None
               OpBranch %88
         %88 = OpLabel
               OpBranch %90
         %90 = OpLabel
         %91 = OpAccessChain %63 %11 %43
         %92 = OpLoad %6 %91
         %93 = OpAccessChain %18 %16 %17 %17
         %94 = OpLoad %6 %93
         %95 = OpIEqual %73 %92 %94
               OpBranchConditional %95 %87 %89
         %89 = OpLabel
        %100 = OpAccessChain %18 %16 %17 %17
        %101 = OpLoad %6 %100
        %102 = OpConvertSToF %96 %101
        %103 = OpAccessChain %18 %16 %17 %43
        %104 = OpLoad %6 %103
        %105 = OpConvertSToF %96 %104
        %106 = OpAccessChain %18 %16 %17 %43
        %107 = OpLoad %6 %106
        %108 = OpConvertSToF %96 %107
        %109 = OpAccessChain %18 %16 %17 %17
        %110 = OpLoad %6 %109
        %111 = OpConvertSToF %96 %110
        %112 = OpCompositeConstruct %97 %102 %105 %108 %111
               OpStore %99 %112
        %114 = OpAccessChain %18 %16 %17 %43
        %115 = OpLoad %6 %114
               OpStore %113 %115
               OpBranch %116
        %116 = OpLabel
               OpLoopMerge %118 %119 None
               OpBranch %120
        %120 = OpLabel
        %121 = OpLoad %6 %113
        %123 = OpAccessChain %18 %16 %17 %122
        %124 = OpLoad %6 %123
        %125 = OpSLessThan %73 %121 %124
               OpBranchConditional %125 %117 %118
        %117 = OpLabel
        %126 = OpLoad %6 %113
        %127 = OpAccessChain %63 %11 %126
        %128 = OpLoad %6 %127
        %129 = OpLoad %6 %113
        %130 = OpAccessChain %63 %40 %129
        %131 = OpLoad %6 %130
        %132 = OpINotEqual %73 %128 %131
               OpSelectionMerge %134 None
               OpBranchConditional %132 %133 %134
        %133 = OpLabel
        %135 = OpAccessChain %18 %16 %17 %43
        %136 = OpLoad %6 %135
        %137 = OpConvertSToF %96 %136
        %138 = OpCompositeConstruct %97 %137 %137 %137 %137
               OpStore %99 %138
               OpBranch %134
        %134 = OpLabel
               OpBranch %119
        %119 = OpLabel
        %139 = OpLoad %6 %113
        %140 = OpIAdd %6 %139 %43
               OpStore %113 %140
               OpBranch %116
        %118 = OpLabel
               OpReturn
               OpFunctionEnd
