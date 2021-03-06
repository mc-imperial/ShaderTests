; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 125
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %106
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "buf0"
               OpMemberName %10 0 "_GLF_uniform_int_values"
               OpName %12 ""
               OpName %26 "m"
               OpName %28 "f"
               OpName %36 "i"
               OpName %48 "j"
               OpName %106 "_GLF_color"
               OpDecorate %9 ArrayStride 16
               OpMemberDecorate %10 0 Offset 0
               OpDecorate %10 Block
               OpDecorate %12 DescriptorSet 0
               OpDecorate %12 Binding 0
               OpDecorate %106 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 4
          %9 = OpTypeArray %6 %8
         %10 = OpTypeStruct %9
         %11 = OpTypePointer Uniform %10
         %12 = OpVariable %11 Uniform
         %13 = OpConstant %6 0
         %14 = OpConstant %6 1
         %15 = OpTypePointer Uniform %6
         %18 = OpTypeBool
         %22 = OpTypeFloat 32
         %23 = OpTypeVector %22 2
         %24 = OpTypeMatrix %23 2
         %25 = OpTypePointer Function %24
         %27 = OpTypePointer Function %22
         %30 = OpConstant %22 1
         %31 = OpConstant %22 0
         %35 = OpTypePointer Function %6
         %78 = OpConstant %6 2
         %85 = OpConstant %6 3
         %94 = OpTypeVector %18 2
        %104 = OpTypeVector %22 4
        %105 = OpTypePointer Output %104
        %106 = OpVariable %105 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %26 = OpVariable %25 Function
         %28 = OpVariable %27 Function
         %36 = OpVariable %35 Function
         %48 = OpVariable %35 Function
         %16 = OpAccessChain %15 %12 %13 %14
         %17 = OpLoad %6 %16
         %19 = OpIEqual %18 %17 %14
               OpSelectionMerge %21 None
               OpBranchConditional %19 %20 %21
         %20 = OpLabel
         %29 = OpLoad %22 %28
         %32 = OpCompositeConstruct %23 %29 %31
         %33 = OpCompositeConstruct %23 %31 %29
         %34 = OpCompositeConstruct %24 %32 %33
               OpStore %26 %34
               OpBranch %21
         %21 = OpLabel
         %37 = OpAccessChain %15 %12 %13 %14
         %38 = OpLoad %6 %37
               OpStore %36 %38
               OpBranch %39
         %39 = OpLabel
               OpLoopMerge %41 %42 None
               OpBranch %43
         %43 = OpLabel
         %44 = OpLoad %6 %36
         %45 = OpAccessChain %15 %12 %13 %13
         %46 = OpLoad %6 %45
         %47 = OpSLessThan %18 %44 %46
               OpBranchConditional %47 %40 %41
         %40 = OpLabel
         %49 = OpAccessChain %15 %12 %13 %14
         %50 = OpLoad %6 %49
               OpStore %48 %50
               OpBranch %51
         %51 = OpLabel
               OpLoopMerge %53 %54 None
               OpBranch %55
         %55 = OpLabel
         %56 = OpLoad %6 %48
         %57 = OpAccessChain %15 %12 %13 %13
         %58 = OpLoad %6 %57
         %59 = OpSLessThan %18 %56 %58
               OpBranchConditional %59 %52 %53
         %52 = OpLabel
         %60 = OpLoad %6 %36
         %61 = OpLoad %6 %48
         %62 = OpLoad %6 %36
         %63 = OpAccessChain %15 %12 %13 %13
         %64 = OpLoad %6 %63
         %65 = OpIMul %6 %62 %64
         %66 = OpLoad %6 %48
         %67 = OpIAdd %6 %65 %66
         %68 = OpConvertSToF %22 %67
         %69 = OpAccessChain %27 %26 %60 %61
               OpStore %69 %68
               OpBranch %54
         %54 = OpLabel
         %70 = OpLoad %6 %48
         %71 = OpIAdd %6 %70 %14
               OpStore %48 %71
               OpBranch %51
         %53 = OpLabel
               OpBranch %42
         %42 = OpLabel
         %72 = OpLoad %6 %36
         %73 = OpIAdd %6 %72 %14
               OpStore %36 %73
               OpBranch %39
         %41 = OpLabel
         %74 = OpLoad %24 %26
         %75 = OpAccessChain %15 %12 %13 %14
         %76 = OpLoad %6 %75
         %77 = OpConvertSToF %22 %76
         %79 = OpAccessChain %15 %12 %13 %78
         %80 = OpLoad %6 %79
         %81 = OpConvertSToF %22 %80
         %82 = OpAccessChain %15 %12 %13 %13
         %83 = OpLoad %6 %82
         %84 = OpConvertSToF %22 %83
         %86 = OpAccessChain %15 %12 %13 %85
         %87 = OpLoad %6 %86
         %88 = OpConvertSToF %22 %87
         %89 = OpCompositeConstruct %23 %77 %81
         %90 = OpCompositeConstruct %23 %84 %88
         %91 = OpCompositeConstruct %24 %89 %90
         %92 = OpCompositeExtract %23 %74 0
         %93 = OpCompositeExtract %23 %91 0
         %95 = OpFOrdEqual %94 %92 %93
         %96 = OpAll %18 %95
         %97 = OpCompositeExtract %23 %74 1
         %98 = OpCompositeExtract %23 %91 1
         %99 = OpFOrdEqual %94 %97 %98
        %100 = OpAll %18 %99
        %101 = OpLogicalAnd %18 %96 %100
               OpSelectionMerge %103 None
               OpBranchConditional %101 %102 %120
        %102 = OpLabel
        %107 = OpAccessChain %15 %12 %13 %78
        %108 = OpLoad %6 %107
        %109 = OpConvertSToF %22 %108
        %110 = OpAccessChain %15 %12 %13 %14
        %111 = OpLoad %6 %110
        %112 = OpConvertSToF %22 %111
        %113 = OpAccessChain %15 %12 %13 %14
        %114 = OpLoad %6 %113
        %115 = OpConvertSToF %22 %114
        %116 = OpAccessChain %15 %12 %13 %78
        %117 = OpLoad %6 %116
        %118 = OpConvertSToF %22 %117
        %119 = OpCompositeConstruct %104 %109 %112 %115 %118
               OpStore %106 %119
               OpBranch %103
        %120 = OpLabel
        %121 = OpAccessChain %15 %12 %13 %14
        %122 = OpLoad %6 %121
        %123 = OpConvertSToF %22 %122
        %124 = OpCompositeConstruct %104 %123 %123 %123 %123
               OpStore %106 %124
               OpBranch %103
        %103 = OpLabel
               OpReturn
               OpFunctionEnd
