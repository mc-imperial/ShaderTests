; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 78
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %26 %59
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "b"
               OpName %15 "buf2"
               OpMemberName %15 0 "_GLF_uniform_int_values"
               OpName %17 ""
               OpName %26 "gl_FragCoord"
               OpName %32 "buf0"
               OpMemberName %32 0 "_GLF_uniform_float_values"
               OpName %34 ""
               OpName %43 "buf1"
               OpMemberName %43 0 "_GLF_uniform_uint_values"
               OpName %45 ""
               OpName %59 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 2
               OpDecorate %26 BuiltIn FragCoord
               OpDecorate %31 ArrayStride 16
               OpMemberDecorate %32 0 Offset 0
               OpDecorate %32 Block
               OpDecorate %34 DescriptorSet 0
               OpDecorate %34 Binding 0
               OpDecorate %42 ArrayStride 16
               OpMemberDecorate %43 0 Offset 0
               OpDecorate %43 Block
               OpDecorate %45 DescriptorSet 0
               OpDecorate %45 Binding 1
               OpDecorate %59 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 0
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 0
         %10 = OpTypeInt 32 1
         %11 = OpTypePointer Function %10
         %13 = OpConstant %6 2
         %14 = OpTypeArray %10 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpConstant %10 0
         %19 = OpConstant %10 1
         %20 = OpTypePointer Uniform %10
         %23 = OpTypeFloat 32
         %24 = OpTypeVector %23 4
         %25 = OpTypePointer Input %24
         %26 = OpVariable %25 Input
         %27 = OpTypePointer Input %23
         %30 = OpConstant %6 1
         %31 = OpTypeArray %23 %30
         %32 = OpTypeStruct %31
         %33 = OpTypePointer Uniform %32
         %34 = OpVariable %33 Uniform
         %35 = OpTypePointer Uniform %23
         %38 = OpTypeBool
         %42 = OpTypeArray %6 %30
         %43 = OpTypeStruct %42
         %44 = OpTypePointer Uniform %43
         %45 = OpVariable %44 Uniform
         %46 = OpTypePointer Uniform %6
         %58 = OpTypePointer Output %24
         %59 = OpVariable %58 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %12 = OpVariable %11 Function
               OpStore %8 %9
         %21 = OpAccessChain %20 %17 %18 %19
         %22 = OpLoad %10 %21
               OpStore %12 %22
         %28 = OpAccessChain %27 %26 %9
         %29 = OpLoad %23 %28
         %36 = OpAccessChain %35 %34 %18 %18
         %37 = OpLoad %23 %36
         %39 = OpFOrdLessThan %38 %29 %37
               OpSelectionMerge %41 None
               OpBranchConditional %39 %40 %41
         %40 = OpLabel
         %47 = OpAccessChain %46 %45 %18 %18
         %48 = OpLoad %6 %47
         %49 = OpLoad %6 %8
         %50 = OpUMod %6 %48 %49
         %51 = OpBitcast %10 %50
               OpStore %12 %51
               OpBranch %41
         %41 = OpLabel
         %52 = OpLoad %10 %12
         %53 = OpAccessChain %20 %17 %18 %19
         %54 = OpLoad %10 %53
         %55 = OpIEqual %38 %52 %54
               OpSelectionMerge %57 None
               OpBranchConditional %55 %56 %73
         %56 = OpLabel
         %60 = OpAccessChain %20 %17 %18 %19
         %61 = OpLoad %10 %60
         %62 = OpConvertSToF %23 %61
         %63 = OpAccessChain %20 %17 %18 %18
         %64 = OpLoad %10 %63
         %65 = OpConvertSToF %23 %64
         %66 = OpAccessChain %20 %17 %18 %18
         %67 = OpLoad %10 %66
         %68 = OpConvertSToF %23 %67
         %69 = OpAccessChain %20 %17 %18 %19
         %70 = OpLoad %10 %69
         %71 = OpConvertSToF %23 %70
         %72 = OpCompositeConstruct %24 %62 %65 %68 %71
               OpStore %59 %72
               OpBranch %57
         %73 = OpLabel
         %74 = OpAccessChain %20 %17 %18 %18
         %75 = OpLoad %10 %74
         %76 = OpConvertSToF %23 %75
         %77 = OpCompositeConstruct %24 %76 %76 %76 %76
               OpStore %59 %77
               OpBranch %57
         %57 = OpLabel
               OpReturn
               OpFunctionEnd
