; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 143
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %124
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %7 "S"
               OpMemberName %7 0 "data0"
               OpMemberName %7 1 "data1"
               OpName %11 "func(struct-S-i1-i11;"
               OpName %10 "s"
               OpName %14 "_GLF_global_loop_count"
               OpName %20 "arr"
               OpName %26 "buf0"
               OpMemberName %26 0 "_GLF_uniform_int_values"
               OpName %28 ""
               OpName %34 "i"
               OpName %48 "j"
               OpName %49 "buf1"
               OpMemberName %49 0 "zero"
               OpName %51 ""
               OpName %84 "param"
               OpName %94 "param"
               OpName %124 "_GLF_color"
               OpDecorate %25 ArrayStride 16
               OpMemberDecorate %26 0 Offset 0
               OpDecorate %26 Block
               OpDecorate %28 DescriptorSet 0
               OpDecorate %28 Binding 0
               OpMemberDecorate %49 0 Offset 0
               OpDecorate %49 Block
               OpDecorate %51 DescriptorSet 0
               OpDecorate %51 Binding 1
               OpDecorate %124 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeStruct %6 %6
          %8 = OpTypePointer Function %7
          %9 = OpTypeFunction %2 %8
         %13 = OpTypePointer Private %6
         %14 = OpVariable %13 Private
         %15 = OpConstant %6 0
         %16 = OpTypeInt 32 0
         %17 = OpConstant %16 10
         %18 = OpTypeArray %7 %17
         %19 = OpTypePointer Private %18
         %20 = OpVariable %19 Private
         %21 = OpConstant %6 1
         %22 = OpConstantComposite %7 %21 %21
         %23 = OpConstantComposite %18 %22 %22 %22 %22 %22 %22 %22 %22 %22 %22
         %24 = OpConstant %16 3
         %25 = OpTypeArray %6 %24
         %26 = OpTypeStruct %25
         %27 = OpTypePointer Uniform %26
         %28 = OpVariable %27 Uniform
         %29 = OpTypePointer Uniform %6
         %32 = OpTypePointer Function %6
         %43 = OpConstant %6 10
         %44 = OpTypeBool
         %49 = OpTypeStruct %6
         %50 = OpTypePointer Uniform %49
         %51 = OpVariable %50 Uniform
         %79 = OpConstant %6 2
         %85 = OpTypePointer Private %7
        %121 = OpTypeFloat 32
        %122 = OpTypeVector %121 4
        %123 = OpTypePointer Output %122
        %124 = OpVariable %123 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %34 = OpVariable %32 Function
         %48 = OpVariable %32 Function
         %84 = OpVariable %8 Function
         %94 = OpVariable %8 Function
               OpStore %14 %15
               OpStore %20 %23
         %35 = OpAccessChain %29 %28 %15 %21
         %36 = OpLoad %6 %35
               OpStore %34 %36
               OpBranch %37
         %37 = OpLabel
               OpLoopMerge %39 %40 None
               OpBranch %41
         %41 = OpLabel
         %42 = OpLoad %6 %14
         %45 = OpSLessThan %44 %42 %43
               OpBranchConditional %45 %38 %39
         %38 = OpLabel
         %46 = OpLoad %6 %14
         %47 = OpIAdd %6 %46 %21
               OpStore %14 %47
         %52 = OpAccessChain %29 %51 %15
         %53 = OpLoad %6 %52
               OpStore %48 %53
               OpBranch %54
         %54 = OpLabel
               OpLoopMerge %56 %57 None
               OpBranch %58
         %58 = OpLabel
         %59 = OpLoad %6 %48
         %60 = OpAccessChain %29 %28 %15 %21
         %61 = OpLoad %6 %60
         %62 = OpINotEqual %44 %59 %61
         %63 = OpLoad %6 %14
         %64 = OpSLessThan %44 %63 %43
         %65 = OpLogicalAnd %44 %62 %64
               OpBranchConditional %65 %55 %56
         %55 = OpLabel
         %66 = OpLoad %6 %14
         %67 = OpIAdd %6 %66 %21
               OpStore %14 %67
               OpBranch %57
         %57 = OpLabel
               OpBranch %54
         %56 = OpLabel
         %68 = OpLoad %6 %34
         %69 = OpAccessChain %13 %20 %68 %15
         %70 = OpLoad %6 %69
         %71 = OpAccessChain %29 %28 %15 %21
         %72 = OpLoad %6 %71
         %73 = OpSGreaterThanEqual %44 %70 %72
               OpSelectionMerge %75 None
               OpBranchConditional %73 %74 %75
         %74 = OpLabel
         %76 = OpLoad %6 %34
         %77 = OpAccessChain %13 %20 %76 %21
         %78 = OpLoad %6 %77
         %80 = OpIEqual %44 %78 %79
               OpSelectionMerge %82 None
               OpBranchConditional %80 %81 %92
         %81 = OpLabel
         %83 = OpLoad %6 %34
         %86 = OpAccessChain %85 %20 %83
         %87 = OpLoad %7 %86
               OpStore %84 %87
         %88 = OpFunctionCall %2 %11 %84
         %89 = OpLoad %7 %84
         %90 = OpAccessChain %85 %20 %83
               OpStore %90 %89
               OpReturn
         %92 = OpLabel
         %93 = OpLoad %6 %34
         %95 = OpAccessChain %85 %20 %93
         %96 = OpLoad %7 %95
               OpStore %94 %96
         %97 = OpFunctionCall %2 %11 %94
         %98 = OpLoad %7 %94
         %99 = OpAccessChain %85 %20 %93
               OpStore %99 %98
               OpBranch %82
         %82 = OpLabel
               OpBranch %75
         %75 = OpLabel
               OpBranch %40
         %40 = OpLabel
        %100 = OpLoad %6 %34
        %101 = OpIAdd %6 %100 %21
               OpStore %34 %101
               OpBranch %37
         %39 = OpLabel
        %102 = OpAccessChain %29 %28 %15 %21
        %103 = OpLoad %6 %102
        %104 = OpAccessChain %13 %20 %103 %15
        %105 = OpLoad %6 %104
        %106 = OpAccessChain %29 %28 %15 %15
        %107 = OpLoad %6 %106
        %108 = OpIEqual %44 %105 %107
               OpSelectionMerge %110 None
               OpBranchConditional %108 %109 %110
        %109 = OpLabel
        %111 = OpAccessChain %29 %28 %15 %79
        %112 = OpLoad %6 %111
        %113 = OpAccessChain %13 %20 %112 %15
        %114 = OpLoad %6 %113
        %115 = OpAccessChain %29 %28 %15 %21
        %116 = OpLoad %6 %115
        %117 = OpIEqual %44 %114 %116
               OpBranch %110
        %110 = OpLabel
        %118 = OpPhi %44 %108 %39 %117 %109
               OpSelectionMerge %120 None
               OpBranchConditional %118 %119 %138
        %119 = OpLabel
        %125 = OpAccessChain %29 %28 %15 %21
        %126 = OpLoad %6 %125
        %127 = OpConvertSToF %121 %126
        %128 = OpAccessChain %29 %28 %15 %15
        %129 = OpLoad %6 %128
        %130 = OpConvertSToF %121 %129
        %131 = OpAccessChain %29 %28 %15 %15
        %132 = OpLoad %6 %131
        %133 = OpConvertSToF %121 %132
        %134 = OpAccessChain %29 %28 %15 %21
        %135 = OpLoad %6 %134
        %136 = OpConvertSToF %121 %135
        %137 = OpCompositeConstruct %122 %127 %130 %133 %136
               OpStore %124 %137
               OpBranch %120
        %138 = OpLabel
        %139 = OpAccessChain %29 %28 %15 %15
        %140 = OpLoad %6 %139
        %141 = OpConvertSToF %121 %140
        %142 = OpCompositeConstruct %122 %141 %141 %141 %141
               OpStore %124 %142
               OpBranch %120
        %120 = OpLabel
               OpReturn
               OpFunctionEnd
         %11 = OpFunction %2 None %9
         %10 = OpFunctionParameter %8
         %12 = OpLabel
         %30 = OpAccessChain %29 %28 %15 %15
         %31 = OpLoad %6 %30
         %33 = OpAccessChain %32 %10 %15
               OpStore %33 %31
               OpReturn
               OpFunctionEnd
