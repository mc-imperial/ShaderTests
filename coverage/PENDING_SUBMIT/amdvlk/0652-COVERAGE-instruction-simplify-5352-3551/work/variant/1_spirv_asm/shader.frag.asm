; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 111
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %92
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %11 "buf1"
               OpMemberName %11 0 "_GLF_uniform_uint_values"
               OpName %13 ""
               OpName %19 "b"
               OpName %20 "buf3"
               OpMemberName %20 0 "zero"
               OpName %22 ""
               OpName %27 "ResType"
               OpName %34 "v"
               OpName %36 "buf2"
               OpMemberName %36 0 "_GLF_uniform_float_values"
               OpName %38 ""
               OpName %68 "buf0"
               OpMemberName %68 0 "_GLF_uniform_int_values"
               OpName %70 ""
               OpName %92 "_GLF_color"
               OpDecorate %10 ArrayStride 16
               OpMemberDecorate %11 0 Offset 0
               OpDecorate %11 Block
               OpDecorate %13 DescriptorSet 0
               OpDecorate %13 Binding 1
               OpMemberDecorate %20 0 Offset 0
               OpDecorate %20 Block
               OpDecorate %22 DescriptorSet 0
               OpDecorate %22 Binding 3
               OpDecorate %35 ArrayStride 16
               OpMemberDecorate %36 0 Offset 0
               OpDecorate %36 Block
               OpDecorate %38 DescriptorSet 0
               OpDecorate %38 Binding 2
               OpDecorate %47 RelaxedPrecision
               OpDecorate %67 ArrayStride 16
               OpMemberDecorate %68 0 Offset 0
               OpDecorate %68 Block
               OpDecorate %70 DescriptorSet 0
               OpDecorate %70 Binding 0
               OpDecorate %92 Location 0
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
         %20 = OpTypeStruct %6
         %21 = OpTypePointer Uniform %20
         %22 = OpVariable %21 Uniform
         %27 = OpTypeStruct %6 %6
         %31 = OpTypeFloat 32
         %32 = OpTypeVector %31 4
         %33 = OpTypePointer Function %32
         %35 = OpTypeArray %31 %9
         %36 = OpTypeStruct %35
         %37 = OpTypePointer Uniform %36
         %38 = OpVariable %37 Uniform
         %39 = OpConstant %14 1
         %40 = OpTypePointer Uniform %31
         %46 = OpConstant %14 3
         %50 = OpTypePointer Function %31
         %52 = OpTypeBool
         %67 = OpTypeArray %14 %9
         %68 = OpTypeStruct %67
         %69 = OpTypePointer Uniform %68
         %70 = OpVariable %69 Uniform
         %71 = OpTypePointer Uniform %14
         %85 = OpTypeVector %52 4
         %91 = OpTypePointer Output %32
         %92 = OpVariable %91 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %19 = OpVariable %7 Function
         %34 = OpVariable %33 Function
         %17 = OpAccessChain %16 %13 %15 %15
         %18 = OpLoad %6 %17
               OpStore %8 %18
         %23 = OpAccessChain %16 %22 %15
         %24 = OpLoad %6 %23
         %25 = OpAccessChain %16 %13 %15 %15
         %26 = OpLoad %6 %25
         %28 = OpIAddCarry %27 %24 %26
         %29 = OpCompositeExtract %6 %28 1
               OpStore %8 %29
         %30 = OpCompositeExtract %6 %28 0
               OpStore %19 %30
         %41 = OpAccessChain %40 %38 %15 %39
         %42 = OpLoad %31 %41
         %43 = OpCompositeConstruct %32 %42 %42 %42 %42
               OpStore %34 %43
         %44 = OpLoad %6 %8
         %45 = OpBitCount %14 %44
         %47 = OpExtInst %14 %1 SClamp %45 %15 %46
         %48 = OpAccessChain %40 %38 %15 %15
         %49 = OpLoad %31 %48
         %51 = OpAccessChain %50 %34 %47
               OpStore %51 %49
         %53 = OpLoad %6 %8
         %54 = OpAccessChain %16 %13 %15 %39
         %55 = OpLoad %6 %54
         %56 = OpIEqual %52 %53 %55
               OpSelectionMerge %58 None
               OpBranchConditional %56 %57 %58
         %57 = OpLabel
         %59 = OpLoad %6 %19
         %60 = OpAccessChain %16 %13 %15 %15
         %61 = OpLoad %6 %60
         %62 = OpIEqual %52 %59 %61
               OpBranch %58
         %58 = OpLabel
         %63 = OpPhi %52 %56 %5 %62 %57
               OpSelectionMerge %65 None
               OpBranchConditional %63 %64 %65
         %64 = OpLabel
         %66 = OpLoad %32 %34
         %72 = OpAccessChain %71 %70 %15 %39
         %73 = OpLoad %14 %72
         %74 = OpConvertSToF %31 %73
         %75 = OpAccessChain %71 %70 %15 %15
         %76 = OpLoad %14 %75
         %77 = OpConvertSToF %31 %76
         %78 = OpAccessChain %71 %70 %15 %15
         %79 = OpLoad %14 %78
         %80 = OpConvertSToF %31 %79
         %81 = OpAccessChain %71 %70 %15 %15
         %82 = OpLoad %14 %81
         %83 = OpConvertSToF %31 %82
         %84 = OpCompositeConstruct %32 %74 %77 %80 %83
         %86 = OpFOrdEqual %85 %66 %84
         %87 = OpAll %52 %86
               OpBranch %65
         %65 = OpLabel
         %88 = OpPhi %52 %63 %58 %87 %64
               OpSelectionMerge %90 None
               OpBranchConditional %88 %89 %106
         %89 = OpLabel
         %93 = OpAccessChain %71 %70 %15 %39
         %94 = OpLoad %14 %93
         %95 = OpConvertSToF %31 %94
         %96 = OpAccessChain %71 %70 %15 %15
         %97 = OpLoad %14 %96
         %98 = OpConvertSToF %31 %97
         %99 = OpAccessChain %71 %70 %15 %15
        %100 = OpLoad %14 %99
        %101 = OpConvertSToF %31 %100
        %102 = OpAccessChain %71 %70 %15 %39
        %103 = OpLoad %14 %102
        %104 = OpConvertSToF %31 %103
        %105 = OpCompositeConstruct %32 %95 %98 %101 %104
               OpStore %92 %105
               OpBranch %90
        %106 = OpLabel
        %107 = OpAccessChain %71 %70 %15 %15
        %108 = OpLoad %14 %107
        %109 = OpConvertSToF %31 %108
        %110 = OpCompositeConstruct %32 %109 %109 %109 %109
               OpStore %92 %110
               OpBranch %90
         %90 = OpLabel
               OpReturn
               OpFunctionEnd
