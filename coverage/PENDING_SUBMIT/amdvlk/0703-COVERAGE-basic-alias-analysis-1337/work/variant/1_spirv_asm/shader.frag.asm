; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 124
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %105
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "S"
               OpMemberName %10 0 "arr"
               OpName %12 "obj"
               OpName %15 "buf0"
               OpMemberName %15 0 "_GLF_uniform_int_values"
               OpName %17 ""
               OpName %44 "i"
               OpName %46 "buf1"
               OpMemberName %46 0 "v0"
               OpName %48 ""
               OpName %69 "a"
               OpName %87 "buf2"
               OpMemberName %87 0 "v1"
               OpName %89 ""
               OpName %105 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 0
               OpMemberDecorate %46 0 Offset 0
               OpDecorate %46 Block
               OpDecorate %48 DescriptorSet 0
               OpDecorate %48 Binding 1
               OpMemberDecorate %87 0 Offset 0
               OpDecorate %87 Block
               OpDecorate %89 DescriptorSet 0
               OpDecorate %89 Binding 2
               OpDecorate %105 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 10
          %9 = OpTypeArray %6 %8
         %10 = OpTypeStruct %9
         %11 = OpTypePointer Function %10
         %13 = OpConstant %7 3
         %14 = OpTypeArray %6 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpConstant %6 0
         %19 = OpConstant %6 2
         %20 = OpTypePointer Uniform %6
         %43 = OpTypePointer Function %6
         %45 = OpTypeVector %6 2
         %46 = OpTypeStruct %45
         %47 = OpTypePointer Uniform %46
         %48 = OpVariable %47 Uniform
         %49 = OpConstant %7 0
         %60 = OpTypeBool
         %67 = OpConstant %6 1
         %79 = OpTypePointer Function %45
         %83 = OpTypePointer Uniform %45
         %87 = OpTypeStruct %45
         %88 = OpTypePointer Uniform %87
         %89 = OpVariable %88 Uniform
         %92 = OpConstant %7 1
        %102 = OpTypeFloat 32
        %103 = OpTypeVector %102 4
        %104 = OpTypePointer Output %103
        %105 = OpVariable %104 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %12 = OpVariable %11 Function
         %44 = OpVariable %43 Function
         %69 = OpVariable %43 Function
         %80 = OpVariable %79 Function
         %21 = OpAccessChain %20 %17 %18 %19
         %22 = OpLoad %6 %21
         %23 = OpAccessChain %20 %17 %18 %19
         %24 = OpLoad %6 %23
         %25 = OpAccessChain %20 %17 %18 %19
         %26 = OpLoad %6 %25
         %27 = OpAccessChain %20 %17 %18 %19
         %28 = OpLoad %6 %27
         %29 = OpAccessChain %20 %17 %18 %19
         %30 = OpLoad %6 %29
         %31 = OpAccessChain %20 %17 %18 %19
         %32 = OpLoad %6 %31
         %33 = OpAccessChain %20 %17 %18 %19
         %34 = OpLoad %6 %33
         %35 = OpAccessChain %20 %17 %18 %19
         %36 = OpLoad %6 %35
         %37 = OpAccessChain %20 %17 %18 %19
         %38 = OpLoad %6 %37
         %39 = OpAccessChain %20 %17 %18 %19
         %40 = OpLoad %6 %39
         %41 = OpCompositeConstruct %9 %22 %24 %26 %28 %30 %32 %34 %36 %38 %40
         %42 = OpCompositeConstruct %10 %41
               OpStore %12 %42
         %50 = OpAccessChain %20 %48 %18 %49
         %51 = OpLoad %6 %50
               OpStore %44 %51
               OpBranch %52
         %52 = OpLabel
               OpLoopMerge %54 %55 None
               OpBranch %56
         %56 = OpLabel
         %57 = OpLoad %6 %44
         %58 = OpAccessChain %20 %17 %18 %18
         %59 = OpLoad %6 %58
         %61 = OpSLessThan %60 %57 %59
               OpBranchConditional %61 %53 %54
         %53 = OpLabel
         %62 = OpLoad %6 %44
         %63 = OpAccessChain %20 %17 %18 %18
         %64 = OpLoad %6 %63
         %65 = OpAccessChain %43 %12 %18 %62
               OpStore %65 %64
               OpBranch %55
         %55 = OpLabel
         %66 = OpLoad %6 %44
         %68 = OpIAdd %6 %66 %67
               OpStore %44 %68
               OpBranch %52
         %54 = OpLabel
         %70 = OpAccessChain %20 %17 %18 %67
         %71 = OpLoad %6 %70
         %72 = OpAccessChain %43 %12 %18 %71
         %73 = OpLoad %6 %72
         %74 = OpAccessChain %20 %48 %18 %49
         %75 = OpLoad %6 %74
         %76 = OpAccessChain %20 %17 %18 %67
         %77 = OpLoad %6 %76
         %78 = OpSLessThan %60 %75 %77
               OpSelectionMerge %82 None
               OpBranchConditional %78 %81 %86
         %81 = OpLabel
         %84 = OpAccessChain %83 %48 %18
         %85 = OpLoad %45 %84
               OpStore %80 %85
               OpBranch %82
         %86 = OpLabel
         %90 = OpAccessChain %83 %89 %18
         %91 = OpLoad %45 %90
               OpStore %80 %91
               OpBranch %82
         %82 = OpLabel
         %93 = OpAccessChain %43 %80 %92
         %94 = OpLoad %6 %93
         %95 = OpIMul %6 %73 %94
               OpStore %69 %95
         %96 = OpLoad %6 %69
         %97 = OpAccessChain %20 %17 %18 %18
         %98 = OpLoad %6 %97
         %99 = OpIEqual %60 %96 %98
               OpSelectionMerge %101 None
               OpBranchConditional %99 %100 %119
        %100 = OpLabel
        %106 = OpAccessChain %20 %17 %18 %67
        %107 = OpLoad %6 %106
        %108 = OpConvertSToF %102 %107
        %109 = OpAccessChain %20 %17 %18 %19
        %110 = OpLoad %6 %109
        %111 = OpConvertSToF %102 %110
        %112 = OpAccessChain %20 %17 %18 %19
        %113 = OpLoad %6 %112
        %114 = OpConvertSToF %102 %113
        %115 = OpAccessChain %20 %17 %18 %67
        %116 = OpLoad %6 %115
        %117 = OpConvertSToF %102 %116
        %118 = OpCompositeConstruct %103 %108 %111 %114 %117
               OpStore %105 %118
               OpBranch %101
        %119 = OpLabel
        %120 = OpAccessChain %20 %17 %18 %19
        %121 = OpLoad %6 %120
        %122 = OpConvertSToF %102 %121
        %123 = OpCompositeConstruct %103 %122 %122 %122 %122
               OpStore %105 %123
               OpBranch %101
        %101 = OpLabel
               OpReturn
               OpFunctionEnd