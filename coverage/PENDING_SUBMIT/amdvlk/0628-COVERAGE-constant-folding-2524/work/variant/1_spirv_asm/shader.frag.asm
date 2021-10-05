; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 122
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %103
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %11 "buf2"
               OpMemberName %11 0 "_GLF_uniform_uint_values"
               OpName %13 ""
               OpName %20 "b"
               OpName %22 "buf1"
               OpMemberName %22 0 "_GLF_uniform_int_values"
               OpName %24 ""
               OpName %32 "arr"
               OpName %35 "buf0"
               OpMemberName %35 0 "_GLF_uniform_float_values"
               OpName %37 ""
               OpName %72 "ResType"
               OpName %76 "indexable"
               OpName %103 "_GLF_color"
               OpDecorate %10 ArrayStride 16
               OpMemberDecorate %11 0 Offset 0
               OpDecorate %11 Block
               OpDecorate %13 DescriptorSet 0
               OpDecorate %13 Binding 2
               OpDecorate %21 ArrayStride 16
               OpMemberDecorate %22 0 Offset 0
               OpDecorate %22 Block
               OpDecorate %24 DescriptorSet 0
               OpDecorate %24 Binding 1
               OpDecorate %34 ArrayStride 16
               OpMemberDecorate %35 0 Offset 0
               OpDecorate %35 Block
               OpDecorate %37 DescriptorSet 0
               OpDecorate %37 Binding 0
               OpDecorate %103 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 0
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 2
         %10 = OpTypeArray %6 %9
         %11 = OpTypeStruct %10
         %12 = OpTypePointer Uniform %11
         %13 = OpVariable %12 Uniform
         %14 = OpTypeInt 32 1
         %15 = OpConstant %14 0
         %16 = OpTypePointer Uniform %6
         %19 = OpTypePointer Function %14
         %21 = OpTypeArray %14 %9
         %22 = OpTypeStruct %21
         %23 = OpTypePointer Uniform %22
         %24 = OpVariable %23 Uniform
         %25 = OpTypePointer Uniform %14
         %28 = OpTypeFloat 32
         %29 = OpConstant %6 5
         %30 = OpTypeArray %28 %29
         %31 = OpTypePointer Function %30
         %33 = OpConstant %6 10
         %34 = OpTypeArray %28 %33
         %35 = OpTypeStruct %34
         %36 = OpTypePointer Uniform %35
         %37 = OpVariable %36 Uniform
         %38 = OpConstant %14 1
         %39 = OpTypePointer Uniform %28
         %42 = OpConstant %14 2
         %45 = OpConstant %14 3
         %48 = OpConstant %14 4
         %51 = OpConstant %14 5
         %56 = OpConstant %14 6
         %59 = OpConstant %14 7
         %64 = OpConstant %14 8
         %67 = OpConstant %14 9
         %71 = OpConstant %6 1
         %72 = OpTypeStruct %6 %6
         %77 = OpTypePointer Function %28
         %84 = OpTypeBool
        %101 = OpTypeVector %28 4
        %102 = OpTypePointer Output %101
        %103 = OpVariable %102 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %20 = OpVariable %19 Function
         %32 = OpVariable %31 Function
         %76 = OpVariable %31 Function
         %17 = OpAccessChain %16 %13 %15 %15
         %18 = OpLoad %6 %17
               OpStore %8 %18
         %26 = OpAccessChain %25 %24 %15 %15
         %27 = OpLoad %14 %26
               OpStore %20 %27
         %40 = OpAccessChain %39 %37 %15 %38
         %41 = OpLoad %28 %40
         %43 = OpAccessChain %39 %37 %15 %42
         %44 = OpLoad %28 %43
         %46 = OpAccessChain %39 %37 %15 %45
         %47 = OpLoad %28 %46
         %49 = OpAccessChain %39 %37 %15 %48
         %50 = OpLoad %28 %49
         %52 = OpAccessChain %39 %37 %15 %51
         %53 = OpLoad %28 %52
         %54 = OpCompositeConstruct %30 %41 %44 %47 %50 %53
               OpStore %32 %54
         %55 = OpLoad %14 %20
         %57 = OpAccessChain %39 %37 %15 %56
         %58 = OpLoad %28 %57
         %60 = OpAccessChain %39 %37 %15 %59
         %61 = OpLoad %28 %60
         %62 = OpAccessChain %39 %37 %15 %15
         %63 = OpLoad %28 %62
         %65 = OpAccessChain %39 %37 %15 %64
         %66 = OpLoad %28 %65
         %68 = OpAccessChain %39 %37 %15 %67
         %69 = OpLoad %28 %68
         %70 = OpCompositeConstruct %30 %58 %61 %63 %66 %69
         %73 = OpISubBorrow %72 %71 %71
         %74 = OpCompositeExtract %6 %73 1
               OpStore %8 %74
         %75 = OpCompositeExtract %6 %73 0
               OpStore %76 %70
         %78 = OpAccessChain %77 %76 %75
         %79 = OpLoad %28 %78
         %80 = OpAccessChain %77 %32 %55
         %81 = OpLoad %28 %80
         %82 = OpFAdd %28 %81 %79
         %83 = OpAccessChain %77 %32 %55
               OpStore %83 %82
         %85 = OpAccessChain %25 %24 %15 %15
         %86 = OpLoad %14 %85
         %87 = OpAccessChain %77 %32 %86
         %88 = OpLoad %28 %87
         %89 = OpAccessChain %39 %37 %15 %15
         %90 = OpLoad %28 %89
         %91 = OpFOrdEqual %84 %88 %90
               OpSelectionMerge %93 None
               OpBranchConditional %91 %92 %93
         %92 = OpLabel
         %94 = OpLoad %6 %8
         %95 = OpAccessChain %16 %13 %15 %38
         %96 = OpLoad %6 %95
         %97 = OpIEqual %84 %94 %96
               OpBranch %93
         %93 = OpLabel
         %98 = OpPhi %84 %91 %5 %97 %92
               OpSelectionMerge %100 None
               OpBranchConditional %98 %99 %117
         %99 = OpLabel
        %104 = OpAccessChain %25 %24 %15 %15
        %105 = OpLoad %14 %104
        %106 = OpConvertSToF %28 %105
        %107 = OpAccessChain %25 %24 %15 %38
        %108 = OpLoad %14 %107
        %109 = OpConvertSToF %28 %108
        %110 = OpAccessChain %25 %24 %15 %38
        %111 = OpLoad %14 %110
        %112 = OpConvertSToF %28 %111
        %113 = OpAccessChain %25 %24 %15 %15
        %114 = OpLoad %14 %113
        %115 = OpConvertSToF %28 %114
        %116 = OpCompositeConstruct %101 %106 %109 %112 %115
               OpStore %103 %116
               OpBranch %100
        %117 = OpLabel
        %118 = OpAccessChain %25 %24 %15 %38
        %119 = OpLoad %14 %118
        %120 = OpConvertSToF %28 %119
        %121 = OpCompositeConstruct %101 %120 %120 %120 %120
               OpStore %103 %121
               OpBranch %100
        %100 = OpLabel
               OpReturn
               OpFunctionEnd
